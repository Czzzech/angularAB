import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";
import {DraggableHelperDirective} from "./draggable-helper.directive";

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  constructor(public sanitizer: DomSanitizer, public element: ElementRef){

  };

  public position = {x: 0, y: 0};
  public startPosition = {x: 0, y: 0};
  private reset = true;

  @HostBinding('style.transform') get transform(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
        `translateX(${this.position.x}px) translateY(${this.position.y}px)`
    );
  }

  @HostBinding('class.draggable') draggable = true;
  @Output() dragStart = new EventEmitter<PointerEvent>();
  @Output() dragMove = new EventEmitter<PointerEvent>();
  @Output() dragEnd = new EventEmitter<PointerEvent>();

  @HostBinding('class.dragging') dragging = false;
  @HostBinding('class.moveable') moveable = true;

  @HostListener('pointerdown', ['$event']) onPointerDown(event: PointerEvent):void {
    this.dragging = true;
    this.startPosition = {
      x: event.clientX - this.position.x,
      y: event.clientY - this.position.y,
    };
    event.preventDefault();
    this.dragStart.emit(event);
  }

  @HostListener('document:pointermove', ['$event']) onPointerMove(event: PointerEvent):void {
    if(!this.dragging)
      return;
    this.position.x = event.clientX - this.startPosition.x;
    this.position.y = event.clientY - this.startPosition.y;
    this.dragMove.emit(event);
  }

  @HostListener('document:pointerup', ['$event']) onPointerUp(event: PointerEvent):void {
    if(!this.dragging)
      return;
    this.dragging = false;
    if(this.reset){
      this.resetPosition();
    }
    this.dragEnd.emit(event);
  }

  public resetPosition(event?: PointerEvent){
    this.position = {
      x: 0,
      y: 0
    };
    if(event)
      this.startPosition = {
        x: event.clientX,
        y: event.clientY
      };
  }

}
