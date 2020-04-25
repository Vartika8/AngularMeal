import { Component, OnInit } from '@angular/core';

import { Users } from '../users';


@Component({
  selector: 'app-restnav',
  templateUrl: './restnav.component.html',
  styleUrls: ['./restnav.component.css']
})
export class RestnavComponent implements OnInit {


  users: Users = JSON.parse(sessionStorage.getItem("username"));

  imagePath = "assets/images/logo.png";


  constructor() { }

  ngOnInit(): void {
  }

}


