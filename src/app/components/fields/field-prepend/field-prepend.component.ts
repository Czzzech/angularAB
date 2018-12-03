import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: '[app-field-prepend]',
  templateUrl: './field-prepend.component.html',
  styleUrls: ['./field-prepend.component.css']
})
export class FieldPrependComponent implements OnInit {

  @Input() config : any;
  @Input() field : FormControl;

  constructor() { }

  ngOnInit() {
  }

  hasErrors(){
    return this.field.errors && (this.field.dirty || this.field.touched);
  }

  noErrors(){
    return !this.field.errors && (this.field.dirty || this.field.touched);
  }


}
