import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IBookResponse, IBooksResponse } from '../Interfaces/Books';
import { BaseUrl } from '../Shared/BaseUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private baseUrl = BaseUrl;
  private http = inject(HttpClient);
  constructor() {}

  public getAll(): Observable<IBooksResponse> {
    return this.http.get<IBooksResponse>(this.baseUrl.books);
  }

  public getById(id: number): Observable<IBookResponse> {
    return this.http.get<IBookResponse>(`${this.baseUrl.book}/${id}`);
  }
}
