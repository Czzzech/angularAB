import {
  AfterContentInit, ContentChildren, Directive, ElementRef, EventEmitter, Output,
  QueryList
} from '@angular/core';
import {DraggableDirective} from "./draggable.directive";
import {SortableDirective} from "./sortable.directive";
import {SortableListDirective} from "./sortable-list.directive";

export interface Boundaries {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

@Directive({
  selector: '[appDraggableArea]'
})
export class DraggableAreaDirective implements AfterContentInit{

  @ContentChildren(SortableDirective) draggables: QueryList<SortableDirective>;

  private boundaries: Boundaries;

  constructor(
      public element: ElementRef,
      private sortableList: SortableListDirective,
  ){}

  private measured = false;

  ngAfterContentInit(){

    this.sortableList.sort.subscribe(event =>
      this.measureBoundaries(this.draggables.toArray()[event.newIndex])
    );

    this.draggables.changes.subscribe(() => {
        this.draggables.forEach(draggable => {
          draggable.dragStart.subscribe(() => this.measureBoundaries(draggable));
          draggable.dragMove.subscribe(() => this.maintainBoundaries(draggable));
          draggable.dragEnd.subscribe(() => {this.measured = false;});
        });
    });

    this.draggables.notifyOnChanges();
  }

  private measureBoundaries(draggable: DraggableDirective): void {
    const parentRect: ClientRect = this.element.nativeElement.getBoundingClientRect();
    const draggableRect: ClientRect = draggable.element.nativeElement.getBoundingClientRect();

    this.boundaries = {
      minX: parentRect.left - draggableRect.left,
      maxX: parentRect.right - draggableRect.right,
      minY: parentRect.top - draggableRect.top,
      maxY: parentRect.bottom - draggableRect.bottom,
    };
  }

  private maintainBoundaries(draggable): void {
    draggable.position.x = Math.max(draggable.position.x, this.boundaries.minX);
    draggable.position.x = Math.min(draggable.position.x, this.boundaries.maxX);
    draggable.position.y = Math.max(draggable.position.y, this.boundaries.minY);
    draggable.position.y = Math.min(draggable.position.y, this.boundaries.maxY);
  }

}
