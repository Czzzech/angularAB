import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ModalContentComponent} from "./modal-content/modal-content.component";

@Component({
  selector: '[app-modal]',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {

  id : string;
  config : any;
  data : any;
  @ViewChild( ModalContentComponent ) contentComponent : ModalContentComponent;

  valid: boolean = false;
  invalid: boolean = false;

  rendered : boolean = false;
  changes : boolean = false;

  constructor() { }

  ngAfterViewInit(){
    this.rendered = true;
  }

  isValid(value){
    if(!this.rendered)
      return;
    switch (value){
      case 'INVALID':
        this.invalid = true;
        this.valid = false;
        break;
      case 'VALID':
        this.invalid = false;
        this.valid = true;
        break;
      default:
        break;
    }
  }

  ngOnInit() {
    if(this.data){
      this.titlePatternReplace()
    }
  }

  titlePatternReplace(){
    for(let key in this.data){
      this.config.header.title = this.config.header.title.replace('{' + key + '}', this.data[key]);
    }
  }

  action(action){
    let field : string;
    let formObject = this.contentComponent.form.getRawValue();
    for (field in formObject){
      if(this.data[field] !== undefined && this.data[field] !== formObject[field].field){
        this.changes = true;
        this.data[field] = formObject[field].field;
      }
    }
    console.log(this.data);
  }
}
