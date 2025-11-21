import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-progress',
  imports: [],
  templateUrl: './signal-progress.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalProgress {

   // Signal que almacena el progreso
  progreso = signal(0);
  
  actualizarProgreso(event: Event) {
    const valor = Number((event.target as HTMLInputElement).value);
    this.progreso.set(valor);
  }

}


