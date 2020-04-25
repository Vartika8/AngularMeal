import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private baseUrl = 'http://localhost:9090/api/';


  constructor(private http: HttpClient) { }

  public resturantList():Observable<any>{

    let resturantList= this.http.get(`${this.baseUrl}`);
    resturantList.subscribe(data=>{console.log(data);});
    return resturantList;
  }
}
