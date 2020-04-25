import { Component, OnInit } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Food } from '../food';
import { FoodService } from '../food.service';


@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})

export class AddfoodComponent implements OnInit {
food:Food;
message:string;
public selectedFile;
public event1;
imgURL: any;
receivedImageData: any;
base64Data: any;
convertedImage: any;

  constructor(private foodService:FoodService,private httpClient: HttpClient) {
    this.food=new Food();
   }

  ngOnInit(): void {
  }
  public addfood()
  {
    let sess=JSON.parse(sessionStorage.getItem('username'));
  console.log(sess.restaurant.id);
    this.food.id=sess.restaurant.id;
    if( this.foodService.addFood(this.food))
    {
      this.message="Sucessfully Added";
    }
    else
    {
      this.message="Un-Sucessfully Added";
    }

  }

  

  

}
