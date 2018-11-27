import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicComponentsLoad]'
})

export class DynamicComponentsLoadDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
