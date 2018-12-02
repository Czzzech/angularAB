import {
  ApplicationRef,
  Component, ComponentFactoryResolver, ElementRef, EmbeddedViewRef, Injector, Input, OnInit, ViewChild
} from '@angular/core';
import {FormComponent} from "../../form/form.component";

@Component({
  selector: '[app-modal-content]',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  @ViewChild('div') div : ElementRef;
  @Input() config : any;

  constructor(
      private appRef: ApplicationRef,
      private componentFactoryResolver: ComponentFactoryResolver,
      private injector: Injector,
  ) { }

  ngOnInit() {
    if(this.config.type === 'form') {
      // 1. Create a component reference from the component
      let componentRef = this.componentFactoryResolver
          .resolveComponentFactory(FormComponent)
          .create(this.injector);

      this.appRef.attachView(componentRef.hostView);

      let formElement = (componentRef.hostView as EmbeddedViewRef<any>)
          .rootNodes[0] as HTMLElement;

      this.div.nativeElement.appendChild(formElement);

      componentRef.instance.render(this.config.formConfig, formElement);

      // 3. Get DOM element from component

    }else{
      //TODO: custom modal content
    }
  }

}
