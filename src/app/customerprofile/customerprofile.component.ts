import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Users} from '../users';


@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {

  users:Users=JSON.parse(sessionStorage.getItem("username"));
  
  constructor() {

    console.log(this.users);

   }

  ngOnInit(): void {
    
  }

}
