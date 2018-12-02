import { Component } from '@angular/core';
import {BaseFieldComponent} from "../base-field/base-field.component";

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent extends BaseFieldComponent{

  constructor() {

  }

}
