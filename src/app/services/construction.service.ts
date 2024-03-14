import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from '../models/construction.model';

@Injectable({
  providedIn: "root",
})

export class ConstructionService {
  constructor(private http: HttpClient) {}

  private baseUrl = "http://localhost:3000/constructions";

  getAllRecipes(): Observable<Construction[]> {
    return this.http.get<Construction[]>(this.baseUrl);
  }
}
