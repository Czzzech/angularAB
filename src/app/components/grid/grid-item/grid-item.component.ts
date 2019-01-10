import {Component, Input, OnInit} from '@angular/core';
import {GridConfig} from "../../../interfaces/GridConfig";
import {SortableListDirective} from "../../../directives/sortable-list.directive";
import {animate, state, style, transition, trigger} from "@angular/animations";

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
  @Input() helper: boolean;

  constructor() { }

  ngOnInit() {
    this.config.columns.forEach(fieldConfig => {
      if(fieldConfig.show){
        this.drawItem[fieldConfig.key] = this.item[fieldConfig.key];
      }
    });
  }

  getKeys(object){
    return this.helper ? ['title'] : Object.keys(object);
  }

}
