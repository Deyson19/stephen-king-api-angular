import { Injectable, inject } from '@angular/core';
import { IShortResponse, IShortsResponse } from '../Interfaces/Shorts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrl } from '../Shared/BaseUrl';

@Injectable({
  providedIn: 'root',
})
export class ShortsService {
  private baseUrl = BaseUrl;
  private http = inject(HttpClient);
  constructor() {}

  public getAll(): Observable<IShortsResponse> {
    return this.http.get<IShortsResponse>(this.baseUrl.shorts);
  }

  public getById(id: number): Observable<IShortResponse> {
    return this.http.get<IShortResponse>(`${this.baseUrl.short}/${id}`);
  }
}
