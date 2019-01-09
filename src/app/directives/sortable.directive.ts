import {Directive, forwardRef} from '@angular/core';
import {DraggableDirective} from "./draggable.directive";
import {HostBinding} from "@angular/core";

@Directive({
  selector: '[appSortable]',
  providers: [
    {provide: DraggableDirective, useExisting: forwardRef(() => SortableDirective)}
  ]
})
export class SortableDirective extends DraggableDirective{

  @HostBinding('class.sortable') sortable = true;

}
