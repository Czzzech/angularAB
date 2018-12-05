import {
  Component, Input, OnInit,
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
  @Input() model: any = false;

  constructor() { }

  ngOnInit(){
    if(this.model === false){
      this.model = {};
      this.fieldsConfig.forEach(field => {
        this.model[field.key] = field.default ? field.default : "";
      });
    }
  }

  visibleFields(){
    return this.fieldsConfig.filter(field =>
        field.visible !== false
    );
  }

}
