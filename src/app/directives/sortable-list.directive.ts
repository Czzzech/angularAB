import {AfterContentInit, ContentChildren, Directive, EventEmitter, Output, QueryList} from '@angular/core';
import {SortableDirective} from "./sortable.directive";
export interface SortEvent {
  currentIndex: number,
  newIndex: number
}

@Directive({
  selector: '[appSortableList]'
})


export class SortableListDirective implements AfterContentInit{

  @ContentChildren(SortableDirective) sortables: QueryList<SortableDirective>;

  @Output() sort = new EventEmitter<SortEvent>();

  constructor() { }

  private rects: ClientRect[];
  private measured = false;

  ngAfterContentInit(): void{
    this.sortables.changes.subscribe(() => {
      if(!this.measured) {
        this.sortables.forEach(sortable => {
          sortable.dragStart.subscribe(() => this.measureRects());
          sortable.dragMove.subscribe(event => this.detectSorting(sortable, event));
          sortable.dragEnd.subscribe(() => {this.measured = false;});
        })
      }
    });
    this.sortables.notifyOnChanges();
  }

  private measureRects(){
    this.rects = this.sortables.map(sortable => sortable.element.nativeElement.getBoundingClientRect());
    this.measured = true;
  }

  private detectSorting(sortable: SortableDirective, event: PointerEvent): void{
    const currentIndex = this.sortables.toArray().indexOf(sortable);

    const prevRect = currentIndex > 0 ? this.rects[currentIndex - 1] : undefined;
    const nextRect = currentIndex < this.rects.length - 1 ? this.rects[currentIndex + 1] : undefined;

    if(prevRect && event.clientY < prevRect.top + prevRect.height / 2){
      sortable.resetPosition(event);
      this.sort.emit({
        currentIndex: currentIndex,
        newIndex: currentIndex - 1
      });
    }else if(nextRect && event.clientY > nextRect.top + nextRect.height / 2){
      sortable.resetPosition(event);
      this.sort.emit({
        currentIndex: currentIndex,
        newIndex: currentIndex + 1
      });
    }
  }

}
