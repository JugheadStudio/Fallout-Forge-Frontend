import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConstructedConstructions } from "../models/constructed-constructions.model";

@Injectable({
  providedIn: "root",
})
export class ccService {
  constructor(private http: HttpClient) {}

  private baseUrl = "http://localhost:3000/admin";

  getAllCC(): Observable<ConstructedConstructions[]> {
    return this.http.get<ConstructedConstructions[]>(this.baseUrl);
  }

  // updateCC(cc: ConstructedConstructions): Observable<ConstructedConstructions> {
  //   return this.http.put<ConstructedConstructions>(
  //     `${this.baseUrl}/${cc.ccMaterials_id}`,
  //     cc
  //   );
  // }

  saveItem(cc: ConstructedConstructions): Observable<ConstructedConstructions> {
    return this.http.put<ConstructedConstructions>(
      `${this.baseUrl}/${cc.ccMaterials_id}`,
      cc
    );
  }

}
