import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BooksService } from '@services/books.service';
import { IBooks } from '@interfaces';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Spinner } from '@shared/index';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  standalone: true,
  imports: [
    MatCardModule,
    Spinner,
    CommonModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './details.component.html',
})
export default class DetailsComponent implements OnInit {
  private booksService = inject(BooksService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  public book?: IBooks;
  message = 'Buscando datos del libro';
  isLoading = true;
  ngOnInit(): void {
    const id: number = this.activatedRoute.snapshot.params['id'];
    this.booksService.getById(id).subscribe((resp) => {
      if (resp.data) {
        this.book = resp.data;
        setTimeout(() => {
          this.isLoading = false;
        }, 1400);
      }
    });
  }
}
