import {
  ApplicationRef, ChangeDetectorRef, Component, ComponentFactoryResolver, EmbeddedViewRef, Injector, Input, OnInit,
  ViewChild
} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DynamicComponentsMappingService} from "../../services/dynamic-components-mapping.service";
import {TextFieldComponent} from "../fields/text-field/text-field.component";

@Component({
  selector: '[app-form]',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fieldsConfig: any;

  form: FormGroup;

  constructor(
      private detector: ChangeDetectorRef,
      private appRef: ApplicationRef,
      public componentFactoryResolver: ComponentFactoryResolver,
      private mapping : DynamicComponentsMappingService,
      private injector: Injector
  ) { }

  render(config: any, element){
    //this.detector.detectChanges();
    this.form = new FormGroup({});
    this.fieldsConfig = config;
    for(let i = 0; i < this.fieldsConfig.length; i++){

      let componentRef = this.componentFactoryResolver
          .resolveComponentFactory(this.getComponent(i))
          .create(this.injector);

      this.appRef.attachView(componentRef.hostView);

      componentRef.instance.render(this.form, this.fieldsConfig[i]);

      let formElement = (componentRef.hostView as EmbeddedViewRef<any>)
          .rootNodes[0] as HTMLElement;
      element.appendChild(formElement);
    }
  }

  getComponent(i) {

    let component = this.mapping.getClass(this.fieldsConfig[i].component);

    return component === undefined ? TextFieldComponent : component;
  }

}
