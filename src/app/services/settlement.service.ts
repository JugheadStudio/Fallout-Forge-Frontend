import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Settlements } from "../models/settlements.model";
import { ConstructedConstructions } from "../models/constructed-constructions.model";
import { Construction } from "../models/construction.model";

@Injectable({
  providedIn: "root",
})
export class SettlementsService {
  constructor(private http: HttpClient) {}

  private baseUrl = "http://localhost:3000/settlements";
  private constrcutionsUrl = "http://localhost:3000/constructions";

  getAllSettlements(): Observable<Settlements[]> {
    return this.http.get<Settlements[]>(this.baseUrl);
  }

  getAllConstructions(): Observable<Construction[]> {
    return this.http.get<Construction[]>(this.constrcutionsUrl);
  }

    craftConstruction(settlementId: number, constructionId: number): Observable<any> {
    return this.http.post<any>(`${this.constrcutionsUrl}/${settlementId}/craft`, { constructionId });
  }
  
}
