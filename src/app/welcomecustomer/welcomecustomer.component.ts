import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';
import { Users } from '../users';
import { Observable } from 'rxjs';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-welcomecustomer',
  templateUrl: './welcomecustomer.component.html',
  styleUrls: ['./welcomecustomer.component.css']
})
export class WelcomecustomerComponent implements OnInit {

  restaurant:Observable<Users>;

  imagePath = [
    '/assets/images/logo.png'
  ]
  constructor(private restaurantService:RestaurantService,public router:Router) {
    
   }

  ngOnInit(): void {
    this.showdata()
  }
showdata(){
  this.restaurant=this.restaurantService.resturantList();
  this.restaurant.subscribe(data=>{
console.log(data);
  });
}
public viewFoodList(id)
{ 
  
  this.router.navigate(['/menulist',id]);    
}
}
