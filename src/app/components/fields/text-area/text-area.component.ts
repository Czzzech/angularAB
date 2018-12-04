import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BaseFieldComponent} from "../base-field/base-field.component";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css', '../base-field/base-field.component.css']
})
export class TextAreaComponent extends BaseFieldComponent implements OnInit {

  @ViewChild('textarea') textarea : ElementRef;

  height = '90px';

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    let validators = [];

    if(this.config.required)
      validators.push(Validators.required);

    if(this.config.pattern)
      validators.push(Validators.pattern(this.config.pattern.match));

    this.field.setValidators(validators);

    if(this.config.height){
      this.height = this.config.height;
    }
    this.setHeight(this.height);
  }

  setHeight(height){
    $(this.textarea.nativeElement).css('height', height);
  }

}
