import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-modal-footer]',
  templateUrl: './modal-footer.component.html',
  styleUrls: ['./modal-footer.component.css']
})
export class ModalFooterComponent implements OnInit {

  @Input() config : any;

  constructor() { }

  ngOnInit() {
  }

}
