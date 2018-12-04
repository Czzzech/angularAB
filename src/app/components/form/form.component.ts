import {
  Component, OnInit,
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

  visibleFields(){
    return this.fieldsConfig.filter(field =>
        field.visible !== false
    );
  }

}
