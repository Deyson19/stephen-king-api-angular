import { Injectable, inject } from '@angular/core';
import { IVillainResponse, IVillainsResponse } from '../Interfaces/Villains';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrl } from '../Shared/BaseUrl';

@Injectable({
  providedIn: 'root',
})
export class VillainsService {
  private baseUrl = BaseUrl;
  private http = inject(HttpClient);
  constructor() {}

  public getAll(): Observable<IVillainsResponse> {
    return this.http.get<IVillainsResponse>(this.baseUrl.villans);
  }

  public getById(id: number): Observable<IVillainResponse> {
    return this.http.get<IVillainResponse>(`${this.baseUrl.villan}/${id}`);
  }
}
