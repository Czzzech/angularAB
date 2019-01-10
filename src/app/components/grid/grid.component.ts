import { Component, Input, OnInit } from '@angular/core';
import { GridConfig } from "../../interfaces/GridConfig";
import { Grid } from "../../interfaces/Grid";
import {ModalService} from "../../services/modal.service";
import {SortEvent} from "../../directives/sortable-list.directive";
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  animations: [
      trigger('sorting', [
          state('idle', style({
              transform: 'translateY(0)',
              opacity: 1
          })),
          state('up', style({
              transform: 'translateY(-100%)',
              opacity: 0
          })),
          state('down', style({
              transform: 'translateY(100%)',
              opacity: 0
          })),
          transition('idle => *', animate('300ms ease-in-out')),
          transition('up => idle', animate('300ms ease-in-out')),
          transition('down => idle', animate('300ms ease-in-out'))
      ]),
    trigger('listAnimation', [
        transition('* => *', [
            query('tr[appSortable]', style({opacity: 0}), {optional: true}),
            query('tr[appSortable]',
                stagger('90ms', [
                    animate('180ms', style({opacity: 1}))
                ]), {optional: true}
            )
        ])
    ]),
    trigger('dragHelperAnimation', [
        state('idle', style({
            //backgroundColor: 'black'
        })),
        state('dragging', style({
            //backgroundColor: 'transparent'
        })),
        transition('idle => dragging', animate('300ms ease-in-out')),
        transition('dragging => idle', animate('300ms ease-in-out')),
    ])
  ]
})
export class GridComponent implements OnInit, Grid {

  @Input() data: any;
  @Input() config: GridConfig;
  @Input() drawColumns: [];
  public sortState = [];
  public dragged = false;

  public dragHelperAnimationState = 'idle';

  public changeHelperAnimationState(state: string){
      this.dragHelperAnimationState = state;
  }

  constructor(
      private modalService: ModalService
  ) { }

  ngOnInit() {

  }

  openModal(item){
    if(this.dragged) {
      this.dragged = false;
      return;
    }
    this.modalService.open(this.config.model, item);
  }

  private currentIndex = -1;
  private newIndex = -1;

  sort(event: SortEvent){
      if(this.data[event.currentIndex].sortState == undefined) {
          this.data[event.currentIndex].sortState = 'idle';
      }
      if(this.data[event.newIndex].sortState == undefined) {
          this.data[event.newIndex].sortState = 'idle';
      }
      this.saveIndexes(event.currentIndex, event.newIndex);
      if(event.currentIndex > event.newIndex){
          this.data[event.currentIndex].sortState = 'up';
          this.data[event.newIndex].sortState = 'down';
      }else{
          this.data[event.currentIndex].sortState = 'down';
          this.data[event.newIndex].sortState = 'up';
      }
  }

  public setIdle(item){
      if(item.sortState == 'idle')
          return;
      item.sortState = 'idle';
  }

  public saveIndexes(currentIndex, newIndex){
      const currentItem = this.data[currentIndex];
      const newItem = this.data[newIndex];
      this.data[currentIndex] = newItem;
      this.data[newIndex] = currentItem;
  }

}
