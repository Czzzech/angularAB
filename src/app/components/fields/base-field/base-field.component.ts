import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-base-field',
  templateUrl: './base-field.component.html',
  styleUrls: ['./base-field.component.css']
})
export class BaseFieldComponent implements OnInit {

  field : FormControl;
  group : FormGroup;
  key: string;

  constructor() { }

  ngOnInit() {
  }

  render(formGroup, key){
    console.log(formGroup);
    this.field = new FormControl(
        "Я текстовое поле!"
    );
    this.group = new FormGroup({
      field: this.field
    });
    formGroup.addControl(key + 'Group', this.group);
  }

}
