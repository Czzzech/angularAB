import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  equalPasswords = false;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({});
  }

  setEqual(value){
    this.equalPasswords = value;
  }

  signIn(){
    console.log(this);
  }

}
