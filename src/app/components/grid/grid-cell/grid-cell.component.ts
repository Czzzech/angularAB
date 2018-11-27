import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { GridCell } from "../../../interfaces/GridCell";
import { DynamicComponentsLoadDirective } from "../../../directives/dynamic-components-load.directive";
import { GridConfig } from "../../../interfaces/GridConfig";
import {GridBaseColumnComponent} from "../grid-columns/grid-base-column/grid-base-column.component";

@Component({
  selector: '[app-grid-cell]',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.css']
})
export class GridCellComponent implements OnInit, GridCell {

  @Input() value: any;
  @Input() key: string;
  @Input() config: GridConfig;
  @ViewChild(DynamicComponentsLoadDirective) componentsLoadDirective: DynamicComponentsLoadDirective;

  constructor(public componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponent());

    let viewContainerRef = this.componentsLoadDirective.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<GridBaseColumnComponent>componentRef.instance).value = this.value;
  }

  getComponent() {
    for(let i = 0; i < this.config.columns.length; i++){
      if(this.config.columns[i].key == this.key) {
        if (this.config.columns[i].content.component === '') {
          break;
        }
        return this.config.columns[i].content.component;
      }
    }
    return GridBaseColumnComponent;
  }

}
