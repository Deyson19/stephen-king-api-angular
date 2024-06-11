import {
  Component,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { Spinner } from '@shared/index';
import { BooksService } from '@services/books.service';
import { IBooks } from '@interfaces';
import { MatCardModule } from '@angular/material/card';
import { BookCardComponent } from '../../components/book-card/book-card.component';

@Component({
  standalone: true,
  imports: [Spinner, MatCardModule, BookCardComponent],
  templateUrl: './list.component.html',
})
export default class ListComponent implements OnInit {
  private booksService = inject(BooksService);
  public booksList: IBooks[] = [];
  isLoading: WritableSignal<boolean> = signal(true);
  message = 'Cargando listado de libros';
  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.booksService.getAll().subscribe((resp) => {
      if (resp.data.length > 0) {
        this.booksList = resp.data;
        setTimeout(() => {
          this.isLoading.set(false);
        }, 1300);
      }
    });
  }
}
