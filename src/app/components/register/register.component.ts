import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  constructor() { }

  ngOnInit() {
  }

  setEmail(value){
    this.email = value;
  }

  setPassword(value){
    this.password = value;
  }

  register(){
    console.log(this);
  }

}
