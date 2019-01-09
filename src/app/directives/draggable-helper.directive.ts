import {Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {DraggableDirective} from "./draggable.directive";
import {GlobalPositionStrategy, Overlay, OverlayRef} from "@angular/cdk/overlay";
import {TemplatePortal} from "@angular/cdk/portal";

@Directive({
  selector: '[appDraggableHelper]',
  exportAs: 'appDraggableHelper'
})
export class DraggableHelperDirective implements OnInit, OnDestroy{

  constructor(
      private draggable: DraggableDirective,
      private templateRef: TemplateRef<any>,
      private viewContainerRef: ViewContainerRef,
      private overlay: Overlay
  ) { }

  private overlayRef: OverlayRef;
  private positionStrategy = new GlobalPositionStrategy();
  private startPosition = {
    x: 0,
    y: 0
  };

  ngOnInit(): void{
    this.draggable.dragStart.subscribe(event => this.onDragStart(event));
    this.draggable.dragMove.subscribe(event => this.onDragMove(event));
    this.draggable.dragEnd.subscribe(() => this.onDragEnd());

    this.overlayRef = this.overlay.create({
      positionStrategy: this.positionStrategy
    });
  }

  ngOnDestroy(){
    this.overlayRef.dispose();
  }

  onDragMove(event: PointerEvent){
    if(!this.overlayRef.hasAttached()){
      this.overlayRef.attach(new TemplatePortal(this.templateRef, this.viewContainerRef));
    }
    this.positionStrategy.left(`${event.clientX - this.startPosition.x}px`);
    this.positionStrategy.top(`${event.clientY - this.startPosition.y}px`);
    this.positionStrategy.apply();
  }

  public onDragStart(event: PointerEvent){
    console.log('draw helper');

    const rect = this.draggable.element.nativeElement.getBoundingClientRect();

    this.startPosition = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  public onDragEnd(){
    console.log('remove helper');
    this.overlayRef.detach();
  }

}
