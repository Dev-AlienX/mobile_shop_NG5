import { Component, OnInit, Input } from '@angular/core';
import { config } from 'rxjs';

@Component({
  selector: 'mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.css']
})
export class MobileCardComponent implements OnInit {
  @Input() cardConfig: any = {};
  constructor() {
    $(document).ready(function() {
      $('.product-card').hover(function() {
        $(this).addClass('animate');
        $('div.carouselNext, div.carouselPrev').addClass('visible');
      }, function() {
        $(this).removeClass('animate');
        $('div.carouselNext, div.carouselPrev').removeClass('visible');
      });
    });
  }

  ngOnInit() {
  }


}
// tslint:disable-next-line: only-arrow-functions
