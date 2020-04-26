import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {
orderList:any;

  constructor(private orderService:OrderService) { 
    this.order();
  }

  ngOnInit(): void {
    this.order();
  }
public order()
{
  this.orderList=this.orderService.order();
  this.orderList.subscribe(data=>
console.log(data));
}
}
