import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { IShorts } from '@interfaces';
import { ShortTypePipe } from '../../../Pipes/short-type.pipe';

@Component({
  selector: 'app-short-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIcon,
    CommonModule,
    RouterModule,
    ShortTypePipe,
  ],
  templateUrl: './short-card.component.html',
})
export class ShortCardComponent {
  short = input.required<IShorts>();
}
