import { Component, OnInit } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-customerupdate',
  templateUrl: './customerupdate.component.html',
  styleUrls: ['./customerupdate.component.css']
})
export class CustomerupdateComponent implements OnInit {

  
  imagePath = [
    
  
    '/assets/images/coffee.jpg',
    '/assets/images/logo.png'

    
  ];
  users:Users=JSON.parse(sessionStorage.getItem("username"));

  cities = ['Ahmedabad', 'Bangalore', 'Delhi', 'Hyderabad', 'Mumbai', 'Noida'];

  states = ['Gujrat','Karnatka', 'Delhi','Telangana','Maharastra','UP']
  constructor() { 
    console.log(this.users);
  }
 
  ngOnInit(): void {
  }
  public OnClickSubmit()
  {
    console.log(this.users);
  }
}
