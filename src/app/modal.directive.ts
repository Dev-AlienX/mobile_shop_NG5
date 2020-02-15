import { Directive, Input, HostListener, ElementRef, Renderer2, ViewContainerRef, ComponentFactoryResolver, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[appModal]'
})
export class ModalDirective implements OnInit {
  @Input() title: string;
  @Input() componentData: string;
  @Input() componentName: string;
  @Output() inputSliderValueChange: EventEmitter<string> = new EventEmitter<string>();


  @HostListener('click', ['$event'])

  /* modal create */
  openModal() {
    this.createModalDialog(ModalComponent);
  }

  constructor(
        private el: ElementRef,
        private ren: Renderer2,
        private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: no-shadowed-variable
  createModalDialog(ModalComponent) {
    this.viewContainer.clear();
    const ModalComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const ModalComponentRef = this.viewContainer.createComponent(ModalComponentFactory);
    // tslint:disable-next-line: no-string-literal
    ModalComponentRef.instance['title'] = this.title;
    // tslint:disable-next-line: no-string-literal
    ModalComponentRef.instance['componentData'] = this.componentData;
    // tslint:disable-next-line: no-string-literal
    ModalComponentRef.instance['componentName'] = this.componentName;
    return ModalComponentRef;
  }





}
