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
    icon : 'base'
  };

  constructor() { }

  ngOnInit() {
    this.field = new FormControl(
        ""
    );
    this.group = new FormGroup({
      field: this.field
    });
    this.form.addControl(this.config.key, this.group);
    if(this.config === false){
      this.config = this.defaultConfig;
    }
  }

  hasErrors(){
    return this.field.errors && (this.field.dirty || this.field.touched);
  }

  noErrors(){
    return !this.field.errors && (this.field.dirty || this.field.touched);
  }

}
