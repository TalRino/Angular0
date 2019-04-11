import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

 // email:string = "Votre adresse mail :";

  model: Order = new Order();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // form submitted
    console.log(this.model);
  }

}


export class Order {
  user:string;
  mail:string;
}
