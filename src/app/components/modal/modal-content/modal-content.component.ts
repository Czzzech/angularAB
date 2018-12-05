import {
  Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef
} from '@angular/core';
import {FormComponent} from "../../form/form.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: '[app-modal-content]',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  form: FormGroup;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  @Input() config : any;
  @Input() data : any = false;
  @Output('valid') validChangeEmitter : EventEmitter<string> = new EventEmitter();

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(){
    if(this.config.type === 'form') {

      this.form = new FormGroup({});
      this.form.statusChanges.subscribe(val => this.onValid(val));

      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(FormComponent);

      this.vc.clear();

      let componentRef = this.vc.createComponent(componentFactory);
      componentRef.instance.fieldsConfig = this.config.formConfig;
      componentRef.instance.form = this.form;
      if(this.data !== false)
        componentRef.instance.model = this.data;

    }else{
      //TODO: custom modal content
    }
  }

  onValid(valid){
    this.validChangeEmitter.emit(valid)
  }

}
