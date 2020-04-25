import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl='http://localhost:9090/api/user';

  constructor(private http:HttpClient) { }
  getUsers(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
    }
}
