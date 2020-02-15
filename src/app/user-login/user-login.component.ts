import { Component, OnInit, Input, ElementRef, Renderer2, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  @Input() data: any;
  constructor(
    private el: ElementRef,
    private ren: Renderer2,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    console.log(this.data);
  }

}
