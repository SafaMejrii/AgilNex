import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from './api.urls';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly helper = new JwtHelperService();
  isLoggedIn$ = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }
  
  registerService(registerObj: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true // Ajoutez ceci pour inclure les cookies dans la requête
    };
    
    return this.http.post<any>(`${apiUrls.authServiceApi}register`, registerObj, httpOptions);
  }
  loginService(loginObj:any){
    
    return this.http.post<any>(`${apiUrls.authServiceApi}login`,loginObj);
  }
  saveToken(token: any) {
    localStorage.setItem('token', token);
  }

  getUsername() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    const decodeToken = this.helper.decodeToken(token);
    return decodeToken.email;
  }
  
 
  /*isLoggedIn(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem("user_id");
    } else {
      return false;
    }
  }*/
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    const decodeToken = this.helper.decodeToken(token);
    if (decodeToken.isAdmin !== true) {
      return false;
    }
    if (this.helper.isTokenExpired(token)) {
      return false;
    }
    return true;
  }
}
