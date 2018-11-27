import {Component, Input, OnInit} from '@angular/core';
import {GridConfig} from "../../../interfaces/GridConfig";

@Component({
  selector: '[app-grid-item]',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})

/**
 * Строчка в гриде. Интерпретирует один объект из массива.
 */
export class GridItemComponent implements OnInit {

  @Input() item: any;
  @Input() config: GridConfig;

  constructor() { }

  ngOnInit() {
  }

  getKeys(object){
    return Object.keys(object);
  }

}
