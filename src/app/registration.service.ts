import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://localhost:9090/api/';
  constructor(private http: HttpClient) { }

  public userRegistration(restaurant) {
    console.log("service calling");
    console.log(restaurant);
   let status=this.http.post("http://localhost:9090/api/userRegistration", restaurant);
   status.subscribe(data=>console.log(data));
  }
}
