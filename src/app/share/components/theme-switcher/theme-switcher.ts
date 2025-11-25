import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './theme-switcher.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcher {
  themes = ['light', 'dark', 'halloween'];

  // Inicializa usando el tema guardado
  currentTheme = signal<string>(this.loadTheme());

  constructor() {
    this.applyTheme(this.currentTheme());
  }

  // Gurdar en local storage
  private saveTheme(theme: string): void {
    localStorage.setItem('selectedTheme', theme);
  }

  // Cargar desde localStorage o usa halloween por defecto
  private loadTheme(): string {
    return localStorage.getItem('selectedTheme') ?? 'halloween';
  }

  // 3. Aplicar al atributo data-theme del <html>
  private applyTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
  }

  setTheme(theme: string): void {
    this.currentTheme.set(theme); // actualizar signal
    this.saveTheme(theme);        // guardar en localStorage
    this.applyTheme(theme);       // aplicar tema global
  }
}

  // Tema actual reactivo
  // currentTheme = signal<string>(this.getCurrentTheme());
  

  // Obtiene el tema actual desde el atributo HTML
  // private getCurrentTheme(): string {
  //   return document.documentElement.getAttribute('data-theme') ?? 'light';
  // }

  
