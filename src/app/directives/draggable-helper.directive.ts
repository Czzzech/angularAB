import {
  Directive, OnDestroy, OnInit, TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {DraggableDirective} from "./draggable.directive";
import {GlobalPositionStrategy, Overlay, OverlayRef} from "@angular/cdk/overlay";
import {TemplatePortal} from "@angular/cdk/portal";
import {DraggableAreaDirective} from "./draggable-area.directive";
import {SortableListDirective} from "./sortable-list.directive";

@Directive({
  selector: '[appDraggableHelper]',
  exportAs: 'appDraggableHelper'
})
export class DraggableHelperDirective implements OnInit, OnDestroy{

  constructor(
      private draggableArea: DraggableAreaDirective,
      private draggable: DraggableDirective,
      private sortableList: SortableListDirective,
      private templateRef: TemplateRef<any>,
      private viewContainerRef: ViewContainerRef,
      private overlay: Overlay
  ) { }

  private offsetY: number;
  private areaRect: ClientRect;
  private dragRect: ClientRect;
  public overlayRef: OverlayRef;
  public position = {x: 0, y: 0};
  private positionStrategy = new GlobalPositionStrategy();
  private startPosition = {
    x: 0,
    y: 0
  };

  ngOnInit(): void{
    this.draggable.dragStart.subscribe(event => this.onDragStart(event));
    this.draggable.dragMove.subscribe(event => this.onDragMove(event));
    this.draggable.dragEnd.subscribe(event => this.onDragEnd(event));

    this.sortableList.sort.subscribe(sortEvent => {this.dragRect = this.sortableList.rects[sortEvent.newIndex]})

    this.overlayRef = this.overlay.create({
      positionStrategy: this.positionStrategy
    });
  }

  ngOnDestroy(){
    this.overlayRef.dispose();
  }

  onDragMove(event: PointerEvent){
    this.position.x = event.clientX - this.startPosition.x;
    this.position.y = event.clientY - this.startPosition.y;
    if(!this.overlayRef.hasAttached()){
      this.overlayRef.attach(new TemplatePortal(this.templateRef, this.viewContainerRef));
    }
    this.maintainPosition();
  }

  public onDragStart(event: PointerEvent){
    this.position = {
      x: 0,
      y: 0
    };
    this.dragRect = this.draggable.element.nativeElement.getBoundingClientRect();
    this.areaRect = this.draggableArea.element.nativeElement.getBoundingClientRect();
    this.positionStrategy.height(`${this.dragRect.height}px`);
    this.positionStrategy.width(`${this.dragRect.width}px`);
    this.positionStrategy.apply();

    this.startPosition = {
      x: event.clientX - this.dragRect.left,
      y: event.clientY - this.dragRect.top
    };
  }

  private maintainPosition(){
    if(this.position.x + this.dragRect.width > this.areaRect.right){
      this.position.x = this.areaRect.right - this.dragRect.width;
    }else if(this.position.x < this.areaRect.left){
      this.position.x = this.areaRect.left;
    }
    if(this.position.y + this.dragRect.height > this.areaRect.bottom){
      this.position.y = this.areaRect.bottom - this.dragRect.height;
    }else if(this.position.y < this.areaRect.top){
      this.position.y = this.areaRect.top;
    }
    if(!this.offsetY)
      this.offsetY = document.getElementsByClassName('cdk-overlay-container')[0].getBoundingClientRect().top;
    this.positionStrategy.left(`${this.position.x}px`);
    this.positionStrategy.top(`${this.position.y - this.offsetY}px`);
    this.positionStrategy.apply();
  }

  public onDragEnd(event: PointerEvent){
    this.positionStrategy.left(`${this.dragRect.left}px`);
    this.positionStrategy.top(`${this.dragRect.top - this.offsetY}px`);
    this.positionStrategy.apply();
    setTimeout(() => {
      this.overlayRef.detach();
    }, 300);
  }

}
