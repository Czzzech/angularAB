import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-base-column',
  templateUrl: './grid-base-column.component.html',
  styleUrls: ['./grid-base-column.component.css']
})
export class GridBaseColumnComponent implements OnInit {

  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}
