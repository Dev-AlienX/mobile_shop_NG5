import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-view',
  templateUrl: './img-view.component.html',
  styleUrls: ['./img-view.component.css']
})
export class ImgViewComponent implements OnInit {
  @Input() imgPath: string;
  @Input() imgText: string;
  @Input() imgFor: string;
  @Input() imgClass: string;
  imgStyle: any = {};
  constructor() { }

  ngOnInit() {
    if (this.imgFor === 'table') {
      this.imgStyle = {
        'max-width': '4em'
      };
    } else if (this.imgFor === 'product') {
      this.imgStyle = {
        'padding-top': '5px',
        // tslint:disable-next-line: object-literal-key-quotes
        'height': '84%',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto'
      };
    }
    else {
      this.imgStyle = {
        'height': '100%',
        'max-height': '100%',
        'display': 'block',
        'margin': '0 auto'
      };
    }

  }

}
