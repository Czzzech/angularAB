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

  drawItem : any = {};
  @Input() item: any;
  @Input() config: GridConfig;

  constructor() { }

  ngOnInit() {
    this.config.columns.forEach(fieldConfig => {
      if(fieldConfig.show){
        this.drawItem[fieldConfig.key] = this.item[fieldConfig.key];
      }
    });
  }

  getKeys(object){
    return Object.keys(object);
  }

}
