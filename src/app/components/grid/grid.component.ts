import { Component, Input, OnInit } from '@angular/core';
import { GridConfig } from "../../interfaces/GridConfig";
import { Grid } from "../../interfaces/Grid";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, Grid {

  @Input() data: any[] = [];
  @Input() config: GridConfig;

  constructor() { }

  ngOnInit() {

  }

}
