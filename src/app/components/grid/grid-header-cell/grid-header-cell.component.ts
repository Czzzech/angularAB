import {Component, Input, OnInit} from '@angular/core';
import { GridColumn } from "../../../interfaces/GridColumn";

@Component({
  selector: '[app-grid-header-cell]',
  templateUrl: './grid-header-cell.component.html',
  styleUrls: ['./grid-header-cell.component.css']
})
export class GridHeaderCellComponent implements OnInit {

  @Input() column: GridColumn;

  constructor() { }

  ngOnInit() {
  }

}
