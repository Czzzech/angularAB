import {Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild} from '@angular/core';
import {DynamicComponentsLoadDirective} from "../../../directives/dynamic-components-load.directive";
import {DynamicComponentsMappingService} from "../../../services/dynamic-components-mapping.service";
import {BaseFieldComponent} from "../../fields/base-field/base-field.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: '[app-field]',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() value: any;
  @Input() form: FormGroup;
  @Input() config: any;
  @ViewChild(DynamicComponentsLoadDirective) componentsLoadDirective: DynamicComponentsLoadDirective;

  constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      private mapping : DynamicComponentsMappingService
  ) { }

  ngOnInit() {

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponent());

    let viewContainerRef = this.componentsLoadDirective.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<BaseFieldComponent>componentRef.instance).config = this.config;
    (<BaseFieldComponent>componentRef.instance).form = this.form;
  }

  getComponent() {
    if(this.config.component !== '')
      return this.mapping.getClass(this.config.component);
    return BaseFieldComponent;
  }
}
