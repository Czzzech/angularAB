import { Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: '[app-base-field]',
  templateUrl: './base-field.component.html',
  styleUrls: ['./base-field.component.css']
})
export class BaseFieldComponent implements OnInit {

  public field : FormControl;
  public group : FormGroup;
  @Input() form: FormGroup;
  @Input() config: any = false;
  defaultConfig = {
    component : 'BaseFieldComponent',
    key : 'field',
    title : 'BaseField',
    icon : 'base',
    disabled : true
  };

  constructor() { }

  ngOnInit() {
    if(this.config === false){
      this.config = this.defaultConfig;
    }
    this.field = new FormControl(
        {value: "", disabled: this.config.disabled}
    );
    this.group = new FormGroup({
      field: this.field
    });
    this.form.addControl(this.config.key, this.group);
  }

  hasErrors(){
    return this.field.errors && (this.field.dirty || this.field.touched);
  }

  noErrors(){
    return !this.field.errors && (this.field.dirty || this.field.touched);
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
