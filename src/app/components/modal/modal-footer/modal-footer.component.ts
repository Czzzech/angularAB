import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: '[app-modal-footer]',
  templateUrl: './modal-footer.component.html',
  styleUrls: ['./modal-footer.component.css']
})
export class ModalFooterComponent implements OnInit {

  @Input() config : any;
  @Output('action') actionEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  click(action){
    this.actionEmitter.emit(action);
  }

}
