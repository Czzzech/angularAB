import {ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector} from '@angular/core';
import {ModalComponent} from "../components/modal/modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  activeModals = {};

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private appRef: ApplicationRef,
      private injector: Injector
  ) { }

  open(id){

    if(id in this.activeModals)
      return;

    // 1. Create a component reference from the component
    const componentRef = this.componentFactoryResolver
        .resolveComponentFactory(ModalComponent)
        .create(this.injector);

    componentRef.instance.id = id;

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);

    let element = $(domElem)
        .attr('id', id)
        .attr('aria-labelledby', 'Title')
        .attr('aria-hidden', 'true')
        .attr('role', 'dialog')
        .attr('tabindex', '-1')
        .addClass('modal fade')
        .modal('toggle');

    //Bootstrap событие начала закрытия модального окна
    let self = this;
    element.on('hidden.bs.modal', function (e) {
      self.close(id);
    });

    // Сохраняем чтобы потом почистить, когда закроем модальное окно
    this.activeModals[componentRef.instance.id] = {
      component : componentRef,
      element : element
    };

  }

  close(id){
    this.appRef.detachView(this.activeModals[id].component.hostView);
    this.activeModals[id].component.destroy();
    delete this.activeModals[id];
  }
}
