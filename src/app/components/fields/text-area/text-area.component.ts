import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TextFieldComponent} from "../text-field/text-field.component";

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css', '../base-field/base-field.component.css']
})
export class TextAreaComponent extends TextFieldComponent implements OnInit {

  @ViewChild('textarea') textarea : ElementRef;

  height = '90px';

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();

    if(this.config.height){
      this.height = this.config.height;
    }
    this.setHeight(this.height);
  }

  setHeight(height){
    $(this.textarea.nativeElement).css('height', height);
  }

}
