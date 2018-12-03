import {AfterViewInit, Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: '[app-modal]',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {

  id : string;
  config : any;

  valid: boolean = false;
  invalid: boolean = false;

  rendered : boolean = false;

  constructor() { }

  ngAfterViewInit(){
    this.rendered = true;
  }

  isValid(value){
    if(!this.rendered)
      return;
    console.log(value);
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

  }

}
