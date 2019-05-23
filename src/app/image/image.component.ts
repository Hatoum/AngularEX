import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  imgSrc = 'https://amp.insider.com/images/5640cf8c9dd7cc1b008c8741-960-640.jpg';

  col = 5;
  a = 0 ;
  b = 0;
  isactive = true;
  // personne = {
  //   username : '',
  //   email : '',
  //   addresse : ''
  // };
  // tabpersonne = [];


  inpuText = 'initialValue';
  login(){
    console.log('Welcome !');
  }
  logout(e){
    console.log(e.target.value);
  }
  somme(e){
    console.log((this.a + this.b));
}
  soustract(e){
  console.log((this.a - this.b));
}
  multiply(e){
  console.log((this.a * this.b));
}
division(e){
  console.log((this.a / this.b));
}
// formul(e){
//    this.tabpersonne.push(this.personne);

//    console.log(this.tabpersonne);
// }
 tab = [];
  personne : FormGroup;
  constructor() {
     this.personne = new FormGroup({
      username : new FormControl(),
      email : new FormControl(),
      addresse : new FormControl()
    })
   }
   register(form){
     this.tab.push(form.value);
     console.log(this.tab);
   }
  ngOnInit() { }

}
