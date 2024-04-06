import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  private isLoggedIn = new BehaviorSubject<boolean>(false)

  private loginUrl = "http://localhost:3000/users/login"

  // Login
  loginUser(email: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.loginUrl, {email, password}).pipe(
      tap((response) => {
        if (response) {
          // set out session storage
          console.log(response)
          sessionStorage.setItem('currentUser', JSON.stringify(response))
          this.isLoggedIn.next(true)
        }
      })
    )
  }

  checkCurrentUserLoggedIn(): boolean {
    var user = JSON.parse(sessionStorage.getItem("currentUser")!)

    if (user) {
      this.isLoggedIn.next(true)
      return true
    } else {
      this.isLoggedIn.next(false)
      return false
    }
  }

  checkIfLoggedIn(): Observable<boolean> {
    this.checkCurrentUserLoggedIn()
    return this.isLoggedIn.asObservable()
  }

  // Logout
  Logout(){
    sessionStorage.removeItem("currentUser")
    this.isLoggedIn.next(false)
  }

  isUserAdmin() {
    var user = JSON.parse(sessionStorage.getItem("currentUser")!)
    
    if (user) {
      console.log(user);
      return user.isAdmin
    } else {
      this.isLoggedIn.next(false)
      return false
    }
  }

  getCurrentUser(): any {
    var user = JSON.parse(sessionStorage.getItem("currentUser")!)
    return user
  }

}
