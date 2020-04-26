import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:9090/api/order';
  constructor(private http:HttpClient) { }

  public order()
  {
    let sess=JSON.parse(sessionStorage.getItem("username"));
    
    let status=this.http.post(`${this.baseUrl}${"/"}${sess.customer.id}`,null);
    return status;
  }
}
