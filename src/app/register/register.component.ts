import { Component, OnInit } from '@angular/core';
import{ Users } from '../users';
import { RegistrationService } from '../registration.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  imagePath = [
    '/assets/images/ice.jfif',
    '/assets/images/logo.png'
  ];

 
  model = new Users();
  

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(private restaurantService:RegistrationService) { }

  ngOnInit(): void {
  }
  public register(){
   this.restaurantService.restaurantRegistration(this.model);

  }
  OnRoleChanged(value)
  {
    console.log(value);
    this.model.role=value;
  }
}
