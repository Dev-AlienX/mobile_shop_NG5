import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  Renderer2,
  ComponentFactoryResolver,
  AfterContentInit
} from '@angular/core';
import { ComponentLoaderService } from '../component-loader.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterContentInit {

  @Input() title: string;
  @Input() componentData: string;
  @Input() componentName: any;
  public name: any;

  @ViewChild('datacontainer', { read: ViewContainerRef, static: false }) entry: ViewContainerRef;

  constructor(
    private el: ElementRef,
    private ren: Renderer2,
    private viewContainer: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private loaderService: ComponentLoaderService
  ) { }

  public div = this.ren.createElement('div');

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.ren.addClass(this.el.nativeElement.ownerDocument.body, 'modal-open');
    this.ren.appendChild(this.el.nativeElement, this.div);
    this.ren.setAttribute(this.div, 'class', 'modal-backdrop fade in');
    this.createModalPopup();
  }

  createModalPopup() {
    const name = this.loaderService.getComponent(this.componentName);
    const myFactory = this.resolver.resolveComponentFactory(name as any);
    const myRef = this.entry.createComponent(myFactory);
    // tslint:disable-next-line: no-string-literal
    myRef.instance['data'] = this.componentData;
  }

  closeModal() {
    this.ren.removeClass(this.el.nativeElement.ownerDocument.body, 'modal-open');
    this.ren.removeChild(this.el.nativeElement, this.div);
    this.el.nativeElement.remove();
  }


}
