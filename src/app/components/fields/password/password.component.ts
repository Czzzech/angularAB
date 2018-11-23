import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  passwordGroup: FormGroup;
  password: FormControl;
  passwordConfirm: FormControl;

  @Input('form') parentGroup : FormGroup;
  @Input('passwordConfirm') needConfirm : boolean;

  @Output('equals') equalsEmitter : EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.password = new FormControl(
        "", [
          Validators.required,
          Validators.minLength(8)
        ]
    );

    this.passwordGroup = new FormGroup({
      password: this.password,
    });
    if(this.needConfirm) {
      this.passwordConfirm = new FormControl(
          "", [
            Validators.required,
            Validators.minLength(8)
          ]
      );
      this.passwordGroup.addControl('passwordConfirm', this.passwordConfirm)
    }
    this.parentGroup.addControl('passwordGroup', this.passwordGroup);
  }

  hasErrors(){
    return this.password.errors && (this.password.dirty || this.password.touched);
  }

  noErrors(){
    return !this.password.errors && (this.password.dirty || this.password.touched);
  }

  emitEqual(){
    this.equalsEmitter.emit(this.confirmEquals());
  }

  confirmEquals(){
    if(!this.needConfirm) return true;
    return (this.password.value.length > 0) && (this.password.value === this.passwordConfirm.value) && (this.password.dirty || this.password.touched);
  }

  confirmNotEquals(){
    if(!this.needConfirm) return false;
    return !(this.password.value === this.passwordConfirm.value) && (this.password.dirty || this.password.touched);
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
