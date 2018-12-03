import {Component, OnInit, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BaseFieldComponent} from "../base-field/base-field.component";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css', '../base-field/base-field.component.css']
})
export class EmailComponent extends BaseFieldComponent implements OnInit{

  @Input() config: any = false;
  defaultConfig = {
    component : 'EmailComponent',
    key : 'email',
    title : 'E-mail',
    icon : 'at'
  };
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.field.setValidators([
      Validators.required,
      Validators.pattern('^[a-zA-z0-9._~!@#$%^&*()\+]+@[a-zA-z0-9._~!@#$%^&*()\+]{1,10}\.[a-zA-z0-9]{2,10}$')
    ]);
  }

  valid(key?: string){
    switch (key){
      case 'pattern':
        return !this.field.errors.pattern;
      case 'required':
        return !this.field.errors.required;
      default:
        return !this.field.invalid;
    }
  }

}
