import {Component, OnInit, Input} from '@angular/core';
import {Validators} from "@angular/forms";
import {TextFieldComponent} from "../text-field/text-field.component";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css', '../base-field/base-field.component.css']
})
export class EmailComponent extends TextFieldComponent implements OnInit{

  @Input() config: any = false;
  defaultConfig = {
    component : 'EmailComponent',
    key : 'email',
    title : 'E-mail',
    icon : 'at',
    required : true,
    pattern : {
      match: '^[a-zA-z0-9._~!@#$%^&*()\+]+@[a-zA-z0-9._~!@#$%^&*()\+]{1,10}\.[a-zA-z0-9]{2,10}$',
      errorText : 'Email must be something like: xx@xx.xx!',
      inputCheck : false
    },
    disabled : false
  };
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
