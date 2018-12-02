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
  @Input() config: any;

  constructor() { }

  ngOnInit() {
    this.field = new FormControl(
        ""
    );
    this.group = new FormGroup({
      field: this.field
    });
    this.form.addControl(this.config.key + 'Group', this.group);
  }

}
