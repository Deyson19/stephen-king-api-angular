import { Component, input } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-shared-spinner',
  standalone: true,
  imports: [MatProgressSpinner],
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
  mensaje = input.required<string>();
}
