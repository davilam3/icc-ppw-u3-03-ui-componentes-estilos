import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignalBoxComponent } from "../components/signalBoxComponent/signalBoxComponent";
import { SignalProgress } from "../components/signal-progress/signal-progress";

@Component({
  selector: 'app-estilos-page',
  standalone: true,
  templateUrl: './estilos-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SignalBoxComponent, SignalProgress],
})
export class EstilosPage {}