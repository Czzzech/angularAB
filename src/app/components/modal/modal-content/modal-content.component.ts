import {
  Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef
} from '@angular/core';
import {FormComponent} from "../../form/form.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: '[app-modal-content]',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  @Input() config : any;

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(){
    console.log(this.config);
    if(this.config.type === 'form') {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(FormComponent);

      this.vc.clear();

      let componentRef = this.vc.createComponent(componentFactory);
      componentRef.instance.fieldsConfig = this.config.formConfig;
      componentRef.instance.form = new FormGroup({});

    }else{
      //TODO: custom modal content
    }
  }

}
