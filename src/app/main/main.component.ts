import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MobileDataService } from '../all-data.service';
import { BrandFilterPipe } from '../brand-filter.pipe';
import { CapitalizePipe } from '../capitalize.pipe';
import { SearchInputService } from '../search-input.service';
import { FilterMobileService } from '../filter-mobile.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true })
        ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])]

})
// export class goals {
//   Value: string;
//   constructor(Value:string)
//   {
//     this.Value = Value;
//   }
// }
export class MainComponent implements OnInit {
  cardConfig: any = {};
  message: string;
  messageNew: string;
  allMobData: any;
  minPriceFl: any;
  maxPriceFl: any;
  minPrice: any;
  maxPrice: any;
  allSearchData: any;
  newData: object = [];
  mobileDetail: object = [];
  searchText: string;
  IsForUpdate: boolean;
  updateItem: any;
  promise: any;
  brandSelected: any[];
  screenHeight: number;
  screenWidth: number;
  ramSelected: any[];
  romSelected: any[];
  type: string;
  method: string;
  // selectedRam: any[];
  constructor(private mdService: MobileDataService, private sIService: SearchInputService, private fmService: FilterMobileService) {
  }

  ngOnInit() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.allSearchData = this.sIService.currentSearch.subscribe(
      (search) => { this.searchText = search; }
    );
    this.fmService.currentMinFilter.subscribe(minPriceFl => this.minPrice = minPriceFl);
    this.fmService.currentMaxFilter.subscribe(maxPriceFl => this.maxPrice = maxPriceFl);
    this.fmService.orderFilterType.subscribe(typeFilter => this.type = typeFilter);
    this.fmService.orderFilterMethod.subscribe(typeMethod => this.method = typeMethod);
    this.fmService.currentBrandFilter.subscribe(selectedBrand => this.brandSelected = selectedBrand);
    this.fmService.currentRamFilter.subscribe(selectedRam => this.ramSelected = selectedRam);
    this.fmService.currentRomFilter.subscribe(selectedRom => this.romSelected = selectedRom);
    this.allMobData = this.mdService.getMobileData().subscribe(
      (data) => {
        this.newData = data;
        this.mobileDetail = data;
      }, (err) => {
        console.log('Error ', err);
      }
    );
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

}
