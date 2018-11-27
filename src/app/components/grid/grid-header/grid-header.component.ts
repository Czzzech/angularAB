import { Component, Input, OnInit } from '@angular/core';
import {GridConfig} from "../../../interfaces/GridConfig";

@Component({
  selector: '[app-grid-header]',
  templateUrl: './grid-header.component.html',
  styleUrls: ['./grid-header.component.css']
})
export class GridHeaderComponent implements OnInit {

  @Input() config: GridConfig;

  constructor() { }

  ngOnInit() {

  }

}
