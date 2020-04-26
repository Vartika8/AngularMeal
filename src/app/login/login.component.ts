import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Users} from '../users';
import{ AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imagePath = [
    
    '/assets/images/cream.jpg',
    '/assets/images/logo.png'

    
  ];
  message: string;

  phone:string;
  password:string;
  constructor(private router: Router,
    private loginservice: AuthenticationService ) {

  }

  ngOnInit(): void {
  }
  public checkLogin() {

    let users={
      "phone":this.phone,
      "password":this.password
    };
    
   let resp = this.loginservice.userLogin(users);

    resp.subscribe(data => {
     
      if(data!=null){
      if (data.restaurant == null) {
        sessionStorage.setItem('username',JSON.stringify(data));

        this.router.navigate(['welcomecustomer']);
      }
      else {
        sessionStorage.setItem('username',JSON.stringify(data));
        this.router.navigate(['restaurantprofile']);

       }
    }}
    );

  
  }
}

  

