import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';
import { Food } from '../food';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewfoodproduct',
  templateUrl: './viewfoodproduct.component.html',
  styleUrls: ['./viewfoodproduct.component.css']
})
export class ViewfoodproductComponent implements OnInit {
  foods: any;
  message:any;

  constructor(private foodService: FoodService,
    private router: Router) { }

  ngOnInit():
    void {
      this.reloadData();
      }
      reloadData()
      {
      this.foods = this.foodService.getfoodList(); //produt consist of data
      }
  
  public deletefood(id)
  {
     this.foods=this.foodService.deletefoodDelete(id);
  }
  public updatefood(id)
  {
    this.router.navigate(['/updatefood',id]);    
  }
}

