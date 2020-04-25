import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {
  imagePath = [
    '/assets/images/logo.png'
  ]
  foods: any;
  message:any;
id:any;
statusCheck:any;
  constructor(private cartService:CartService,private foodService: FoodService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {   this.id = this.route.snapshot.params['id'];

    this.reloadData();
  }
  reloadData()
  {
  this.foods = this.foodService.getFoodListByRestaurant(this.id); //produt consist of data
  }

  public Checkout()
{
  console.log("Cart Calling");
  this.router.navigate(['/cart']);    
}

public addtoCart(id)
{
  console.log("Adding to Cart")
let status=this.cartService.addCart(id);
status.subscribe(data=>{this.statusCheck=data;});
if(this.statusCheck)
{

  this.message="Successfully Added";
}
else
{
  this.message="Un-Successfully Added";
}
}



  }


