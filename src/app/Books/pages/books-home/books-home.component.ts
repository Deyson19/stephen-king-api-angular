import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './books-home.component.html',
  styleUrl: './books-home.component.css',
})
export default class BooksHomeComponent {}
