import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeSwitcher } from "../../../../share/components/theme-switcher/theme-switcher";
import { AuthService } from '../../../../core/services/firebase/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ThemeSwitcher],
  templateUrl: './drawer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Drawer {

  private authService = inject(AuthService);
  private router = inject(Router);

  currentUser = this.authService.currentUser;
  favoritesService: any;

  /**
 * Navega a la página de login
 */
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  /**
   * Verifica si el usuario está autenticado
   */
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  /**
   * Cierra la sesión del usuario
   */
  logout() {
    if (confirm('¿Cerrar sesión?')) {
      this.authService.logout().subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Error al cerrar sesión:', error);
        }
      });
    }
  }

  private toastr = inject(ToastrService);

  addToFavorites(character: any) {
    this.favoritesService.addFavorite(
      character.character,
      character.image
    ).subscribe({
      next: () => {
        this.addToFavorites(character);
        this.toastr.success('Agregado a favoritos', 'Éxito');
      },
      error: () => {
        this.toastr.error('Error al agregar', 'Error');
      }
    });
  }
}
