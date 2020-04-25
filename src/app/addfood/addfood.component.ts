import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {
food:Food;
message:string;
public selectedFile;
public event1;
imgURL: any;
receivedImageData: any;
base64Data: any;
convertedImage: any;

  constructor(private foodService:FoodService,private httpClient: HttpClient) {
    this.food=new Food();
   }

  ngOnInit(): void {
  }
  public addfood()
  {
    let sess=JSON.parse(sessionStorage.getItem('username'));
  console.log(sess.restaurant.id);
    this.food.id=sess.restaurant.id;
    if( this.foodService.addFood(this.food))
    {
      this.message="Sucessfully Added";
    }
    else
    {
      this.message="Un-Sucessfully Added";
    }

  }

  public  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
  };

 }


 // This part is for uploading
 onUpload() {

console.log("hello");
  const uploadData = new FormData();
  uploadData.append('myFile', this.selectedFile, this.selectedFile.name);


  this.httpClient.post('http://localhost:9090/api/food/upload', uploadData)
  .subscribe(
               res => {console.log(res);
                       this.receivedImageData = res;
                       this.base64Data = this.receivedImageData.data;
                       this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
               err => console.log('Error Occured duringng saving: ' + err)
            );


 }
  


  
}
