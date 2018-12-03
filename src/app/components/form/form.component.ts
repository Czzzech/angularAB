import {
  Component, ComponentRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges
} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: '[app-form]',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

  fieldsConfig: any;
  parentComponentRef : ComponentRef;
  form: FormGroup;

  constructor() { }

  ngOnInit(){

  }

}
