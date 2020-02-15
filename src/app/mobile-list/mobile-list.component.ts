import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit, AfterViewInit {
  @Input() cardConfig: any = {};
  tempNo: number;
  ratings: number;
  disconute: number;
  constructor() { }

  ngOnInit() {
    this.ratings =  Math.floor(1000 + Math.random() * 9000);
    this.tempNo = this.randomDiscount();
    this.disconute = Math.floor((this.tempNo / 100) * this.cardConfig.price + this.cardConfig.price);
  }
  ngAfterViewInit() { }
  randNumGen() {
    this.ratings =  Math.floor(1000 + Math.random() * 9000);
  }
  randomDiscount(){
    return Math.floor(Math.random() * 20);
  }
  disconutedPrice(price) {
    this.tempNo = this.randomDiscount();
    return Math.floor((this.tempNo / 100) * price + price);
  }

}
