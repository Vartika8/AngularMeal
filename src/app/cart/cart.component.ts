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

  }
  changeQuantity(cartItem)
  {
     let quantity=cartItem.quantity;
     cartItem.price=cartItem.food.price*quantity;
     this.total=0;
      this.updateCart(cartItem);
      this.cartListing();
  }
  deleteCartItem(cartId)
  {
    this.cartService.deleteCartItem(cartId);
    this.cartListing();
  }
public cartListing() 
{   this.total=0;
  this.cartList=this.cartService.viewCart();
  this.cartList.subscribe(data=>{
    for(var i=0;i<data.length;i++)
    {
      this.total+=data[i].price;
    }
    });
} 
public updateCart(cartItem){
  console.log(cartItem);
 this.cartService.updateCart(cartItem);
}
public vieworder()
{
  this.router.navigate(['vieworder']);
}

}
