import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {


  passwordGroup: FormGroup;
  password: FormControl;
  @Input('form') parentGroup : FormGroup;
  constructor() { }

  ngOnInit() {
    this.password = new FormControl(
        "", [
          Validators.required,
          Validators.minLength(6)
        ]
    );
    this.passwordGroup = new FormGroup({
      password: this.password
    });
    this.parentGroup.addControl('passwordGroup', this.passwordGroup);
  }

  hasErrors(){
    return this.password.errors && (this.password.dirty || this.password.touched);
  }

  valid(key?: string){
    switch (key){
      case 'minlength':
        return !this.password.errors.minlength;
      case 'required':
        return !this.password.errors.required;
      default:
        return !this.password.invalid;
    }
  }

}
