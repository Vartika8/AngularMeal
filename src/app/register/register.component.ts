import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';




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

  constructor(private router: Router, private restaurantService: RegistrationService) { }

  ngOnInit(): void {
  }
  public register() {
    console.log(this.model);
    this.restaurantService.userRegistration(this.model);
    this.router.navigate(['login']);

  }
  OnRoleChanged(value) {
    console.log(value);
    this.model.role = value;
  }
}
