import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private baseUrl = 'http://localhost:9090/api/food';

  constructor(private http:HttpClient) { }
viewFood(id)
{
  return this.http.get(`${this.baseUrl}/${id}`);
}
  getfoodList(){
    console.log("service calling");
    let sess=JSON.parse(sessionStorage.getItem('username'));
    console.log(sess);
    let foodList=this.http.post(`${this.baseUrl}`,sess);
    foodList.subscribe(data=>{console.log(data)});
    return foodList;
  }
getFoodListByRestaurant(id)
{
  console.log("Food list By Restaurant ");
let foodList=this.http.get(`${this.baseUrl}${"/customer/"}${id}`);
foodList.subscribe(data=>{console.log(data)});
return foodList;
}
  deletefoodDelete(id){
   
    let foodList= this.http.delete(`${this.baseUrl}/${id}`);
   // foodList.subscribe(data=>{console.log(data)});
    return foodList;
  }
  addFood(food)
  {
    console.log(food);
    let response =this.http.post(this.baseUrl+"/add",food);
    response.subscribe(data=>{console.log(data)});
    return response;
  }
  updateFood(food) 
  {
    console.log(food);
    let status=this.http.put(`${this.baseUrl}/${food.id}`,food);
    status.subscribe(data=>{console.log(data)});
    return status;
  }
}
