import { Component, Input, OnInit } from '@angular/core';
import { GridConfig } from "../../interfaces/GridConfig";
import { Grid } from "../../interfaces/Grid";
import {ModalService} from "../../services/modal.service";
import {SortEvent} from "../../directives/sortable-list.directive";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, Grid {

  @Input() data: any;
  @Input() config: GridConfig;
  @Input() drawColumns: [];

  constructor(
      private modalService: ModalService
  ) { }

  ngOnInit() {

  }

  openModal(item){
    this.modalService.open(this.config.model, item);
  }

  sort(event: SortEvent){
    console.log(event);
    const current = this.data[event.currentIndex];
    const swapWith = this.data[event.newIndex];

    this.data[event.newIndex] = current;
    this.data[event.currentIndex] = swapWith;
    console.log(this.data);
  }

}
