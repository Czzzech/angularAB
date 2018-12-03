import {
  Component, ComponentRef, OnInit,
} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: '[app-form]',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fieldsConfig: any;
  form: FormGroup;

  constructor() { }

  ngOnInit(){

  }

}
