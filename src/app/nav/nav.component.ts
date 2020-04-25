import { Component, OnInit } from '@angular/core';
import { Users } from '../users';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  users:Users=JSON.parse(sessionStorage.getItem("username"));

  imagePath = "assets/images/logo.png";

  constructor() { }

  ngOnInit(): void {
  }

}
