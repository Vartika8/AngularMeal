import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:9090/api/cart';
  constructor(private http:HttpClient) { }

  public addCart(foodId)
  {
    let sess=JSON.parse(sessionStorage.getItem("username"));
    console.log(sess.customer.id);
    console.log(foodId);
    let status=this.http.post(`${this.baseUrl}${'/'}${sess.customer.id}`,foodId);
    return status;
  }

  public viewCart()
  {
    
    let sess=JSON.parse(sessionStorage.getItem("username"));
    console.log(sess.customer.id);
    let cartList=this.http.get(`${this.baseUrl}${'/'}${sess.customer.id}`);
    cartList.subscribe(data=>{console.log(data);});
    return cartList;
  }
  public deleteCartItem(cartId)

  {
    let cartList=this.http.delete(`${this.baseUrl}${'/'}${cartId}`);
    cartList.subscribe(data=>{console.log(data);});
    return cartList;
  }
}
