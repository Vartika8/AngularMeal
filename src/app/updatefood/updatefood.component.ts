import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';


@Component({
  selector: 'app-updatefood',
  templateUrl: './updatefood.component.html',
  styleUrls: ['./updatefood.component.css']
})
export class UpdatefoodComponent implements OnInit {
id:any;
food:any;
message:any;
  constructor(private foodService:FoodService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.food=new Food();
    this.id = this.route.snapshot.params['id'];
   this.foodService.viewFood(this.id).subscribe(data=>{
   
    this.food=data;
   }, error => console.log(error));
  }
  public updateFood()
  {
  
    if(this.foodService.updateFood(this.food))
    {
      this.message="Successfully Updated";
    }
    else
    {
      this.message="Un-Successfully Update";
    }
  }

}
