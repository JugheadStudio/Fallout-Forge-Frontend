import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../models/inventory.model';

@Injectable({
  providedIn: "root",
})
export class InventoryService {
  constructor(private http: HttpClient) {}

  private baseUrl = "http://localhost:3000/inventory";

  getAllInventory(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.baseUrl);
  }

  updateInventoryAmount(constructionInventory_id: number, newAmount: number): Observable<Inventory> {
    return this.http.put<Inventory>(`${this.baseUrl}/${constructionInventory_id}`, {
      amount: newAmount,
    });
  }
} 