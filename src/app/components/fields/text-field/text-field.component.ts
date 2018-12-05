import { Component } from '@angular/core';
import {BaseFieldComponent} from "../base-field/base-field.component";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css', '../base-field/base-field.component.css']
})
export class TextFieldComponent extends BaseFieldComponent {

  defaultConfig = {
    component : 'TextFieldComponent',
    key : 'text',
    title : 'Text',
    icon : 'text',
    required : false,
    disabled : false
  };

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

    this.field.setValidators(validators);
  }

  checkInput(event){
    this.field.markAsTouched();
    this.field.markAsDirty();
    if(this.config.pattern !== undefined && this.config.pattern.inputCheck) {
      let regex = new RegExp(this.config.pattern.match);
      let valueForTest = this.field.value.length > 0 ? this.field.value + event.key : event.key;
      if(!regex.exec(valueForTest)){
        event.preventDefault();
      }
    }
  }

}
