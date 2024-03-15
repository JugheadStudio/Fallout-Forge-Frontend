import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Settlements } from '../models/settlements.model';

@Injectable({
  providedIn: "root",
})

export class SettlementsService {
  constructor(private http: HttpClient) {}

  private baseUrl = "http://localhost:3000/settlements";

  getAllSettlements(): Observable<Settlements[]> {
    return this.http.get<Settlements[]>(this.baseUrl);
  }
}
