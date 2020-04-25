import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { finalize } from "rxjs/operators";
import { Users } from '../users';

@Component({
  selector: 'app-restaurantprofile',
  templateUrl: './restaurantprofile.component.html',
  styleUrls: ['./restaurantprofile.component.css']
})
export class RestaurantprofileComponent implements OnInit {
  users:Users=JSON.parse(sessionStorage.getItem("username"));
  constructor() { }

  ngOnInit(): void {
  }


}
