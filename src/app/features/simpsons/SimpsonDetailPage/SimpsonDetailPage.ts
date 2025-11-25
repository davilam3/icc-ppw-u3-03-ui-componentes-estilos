import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SimpsonsService } from '../services/simpsons-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simpson-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './SimpsonDetailPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonDetailPage {
  private route = inject(ActivatedRoute);
  private service = inject(SimpsonsService);

    personaje = toSignal(
    this.route.paramMap.pipe(
      map(params => +params.get('id')!),
      switchMap(id => this.service.getCharacterById(id))
    ),
    { initialValue: null }
  );
 }
