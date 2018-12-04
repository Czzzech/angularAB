import { Component } from '@angular/core';
import {BaseFieldComponent} from "../base-field/base-field.component";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css', '../base-field/base-field.component.css']
})
export class TextFieldComponent extends BaseFieldComponent {

  constructor() {
    super();
  }

  ngOnInit(){
    super.ngOnInit();

    let validators = [];

    if(this.config.required)
      validators.push(Validators.required);

    if(this.config.pattern)
      validators.push(Validators.pattern(this.config.pattern.match));

    this.field.setValidators(validators)
  }

}
