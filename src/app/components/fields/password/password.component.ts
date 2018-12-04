import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {BaseFieldComponent} from "../base-field/base-field.component";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css', '../base-field/base-field.component.css']
})
export class PasswordComponent extends BaseFieldComponent implements OnInit{

  password: FormControl;
  passwordConfirm: FormControl;

  defaultConfig = {
    component : 'PasswordComponent',
    key : 'password',
    title : 'Password',
    icon : 'key',
    disabled : false
  };

  configConfirm = {
    component : 'PasswordComponent',
    key : 'confirmPassword',
    title : 'Confirm Password',
    icon : 'key',
    disabled : false
  };

  @Input('passwordConfirm') needConfirm : boolean;

  @Output('equals') equalsEmitter : EventEmitter<boolean> = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.field.setValidators([
      Validators.required,
      Validators.minLength(8)
    ]);
    if(this.needConfirm) {
      this.passwordConfirm = new FormControl(
          "", [
            Validators.required,
            Validators.minLength(8)
          ]
      );
      this.group.addControl('passwordConfirm', this.passwordConfirm)
    }
  }

  hasErrors(){
    return this.field.errors && (this.field.dirty || this.field.touched);
  }

  noErrors(){
    return !this.field.errors && (this.field.dirty || this.field.touched);
  }

  emitEqual(){
    this.equalsEmitter.emit(this.confirmEquals());
  }

  confirmEquals(){
    if(!this.needConfirm) return true;
    return (this.field.value === this.passwordConfirm.value) && (this.field.dirty || this.field.touched);
  }

  confirmNotEquals(){
    if(!this.needConfirm) return false;
    return !(this.field.value === this.passwordConfirm.value) && (this.field.dirty || this.field.touched);
  }

  validConfirm(){
    if(!this.needConfirm) return true;
    return !this.passwordConfirm.errors && (this.passwordConfirm.dirty || this.passwordConfirm.touched) && this.confirmEquals();
  }

  invalidConfirm(){
    if(!this.needConfirm) return false;
    return (this.confirmNotEquals() || this.passwordConfirm.errors) && (this.passwordConfirm.dirty || this.passwordConfirm.touched);
  }

  validLengthConfirm(){
    if(!this.needConfirm) return true;
    return !this.passwordConfirm.errors && (this.passwordConfirm.dirty || this.passwordConfirm.touched);
  }

  invalidLengthConfirm(){
    if(!this.needConfirm) return false;
    return this.passwordConfirm.errors && (this.passwordConfirm.dirty || this.passwordConfirm.touched);
  }

  valid(key?: string){
    switch (key){
      case 'minlength':
        return !this.field.errors.minlength;
      case 'required':
        return !this.field.errors.required;
      default:
        return !this.field.invalid;
    }
  }

}
