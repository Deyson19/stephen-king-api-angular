import { Component } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [MatProgressBar, RouterOutlet],
  templateUrl: './villains-home.component.html',
  styleUrl: './villains-home.component.css',
})
export class VillainsHomeComponent {}
