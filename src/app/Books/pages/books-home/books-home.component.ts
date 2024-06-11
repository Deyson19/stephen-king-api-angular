import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatProgressBar],
  templateUrl: './books-home.component.html',
  styleUrl: './books-home.component.css',
})
export default class BooksHomeComponent {}
