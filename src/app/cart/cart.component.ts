import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

id:any;
cartList:any;
total:number;
  constructor(private cartService:CartService,private router:Router) {
   
   }

  ngOnInit(): void {
    this.total=0;
    this.cartListing();
this.cartList.subscribe(data=>{
  for(var i=0;i<data.length;i++)
  {
    this.total+=data[i].price;
  }
  });

  }
  changeQuantity(cartItem)
  {
     let quantity=cartItem.quantity;
     cartItem.price=cartItem.food.price*quantity;
     this.total=0;
    this.cartList.subscribe(data=>{4
      console.log(data);
      for(var i=0;i<data.length;i++)
      {
        if(cartItem.id==data[i].id)
        {
          data[i].quantity=cartItem.quantity;
          data[i].price=data[i].food.price* data[i].quantity;
        }
       
        this.total+=data[i].price;
      }
      });
  }
  deleteCartItem(cartId)
  {
    this.cartService.deleteCartItem(cartId);
    this.cartListing();
  }
public cartListing() 
{
  this.cartList=this.cartService.viewCart();
} 
}
