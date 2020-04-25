import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:9090/api/';
  constructor(private http: HttpClient) { }
  public userLogin(user):Observable<any> {

  return this.http.post(this.baseUrl + "login", user);
  }

  isUserLoggedIn(){

    let user = sessionStorage.getItem('username')
    //console.log(!(user=== null))
    return !(user === null)
  }

  logOut(){

    sessionStorage.removeItem('username')
  }
}