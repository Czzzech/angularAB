import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-base-field',
  templateUrl: './base-field.component.html',
  styleUrls: ['./base-field.component.css']
})
export class BaseFieldComponent implements OnInit {

  field : FormControl;
  group : FormGroup;
  form: FormGroup;
  config: any;

  constructor() { }

  ngOnInit() {
  }

  render(formGroup, config){
    this.config = config;
    this.form = formGroup;
    this.field = new FormControl(
        ""
    );
    this.group = new FormGroup({
      field: this.field
    });
    this.form.addControl(config.key + 'Group', this.group);
  }

}
