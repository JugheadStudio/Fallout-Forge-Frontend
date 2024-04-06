import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.model"; // Assuming you have a User interface representing the user

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private baseUrl = "http://localhost:3000/auth"; // Assuming your authentication endpoint is at '/auth'

  loginUser(email: string, password: string): Observable<User | boolean> {
    // Assuming your backend returns the user's information upon successful login
    return this.http.post<User>(`${this.baseUrl}/login`, { email, password });
  }
}