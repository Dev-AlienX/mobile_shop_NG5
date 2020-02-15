import { Component, OnInit } from '@angular/core';
import { BrandFilterPipe } from '../brand-filter.pipe';
import { CapitalizePipe } from '../capitalize.pipe';
import { UniquePipe } from '../unique.pipe';
import { MobileDataService } from '../all-data.service';
import { FilterMobileService } from '../filter-mobile.service';
import { SearchInputService } from '../search-input.service';

@Component({
  selector: 'filter-in-mobile',
  templateUrl: './filter-in-mobile.component.html',
  styleUrls: ['./filter-in-mobile.component.css']
})
export class FilterInMobileComponent implements OnInit {
  sortContainer = false;
  filterContainer = false;
  search: string;
  minPriceFl: any;
  maxPriceFl: any;
  searchMobData: any;
  dataSearchText: any;
  searchText: string;
  minPrice: any;
  maxPrice: any;
  allMobData: any;
  mobileDetail: any;
  mobileBrand: any;
  rangeError: boolean;
  dangerColor: any;
  brandSelected: any[];
  selectedBrand: any[];
  ramSelected: any[];
  selectedRam: any[];
  romSelected: any[];
  selectedRom: any[];
  mobileRam: any;
  mobileRom: any;
  type: string;
  method: string;
  unchangeData: object;

  constructor(private siService: SearchInputService, private mdService: MobileDataService, private fmService: FilterMobileService) { }

  ngOnInit() {
    this.fmService.currentMinFilter.subscribe(minPriceFl => this.minPrice = minPriceFl);
    this.fmService.currentMaxFilter.subscribe(maxPriceFl => this.maxPrice = maxPriceFl);
    this.fmService.orderFilterType.subscribe(typeFilter => this.type = typeFilter);
    this.fmService.orderFilterMethod.subscribe(typeMethod => this.method = typeMethod);
    this.fmService.currentBrandFilter.subscribe(selectedBrand => this.brandSelected = selectedBrand);
    this.fmService.currentRamFilter.subscribe(selectedRam => this.ramSelected = selectedRam);
    this.fmService.currentRomFilter.subscribe(selectedRom => this.romSelected = selectedRom);
    this.allMobData = this.mdService.getMobileData().subscribe(
      (data) => {
        this.mobileDetail = data;
        this.mobileBrand = data;
        this.mobileRam = data;
        this.mobileRom = data;
        this.unchangeData = data;
      }, (err) => {
        console.log('Error ', err);
      }
    );
  }
  minMaxApply() {
    if (!this.minPrice || !this.maxPrice) {
      this.rangeError = false;
      this.dangerColor = {
        'box-shadow':
          '1px 1px 6px 0px #cacaca'
      };
      this.fmService.changeFilter(this.minPrice, this.maxPrice);
    } else if (+this.minPrice < +this.maxPrice) {
      this.rangeError = false;
      this.dangerColor = {
        'box-shadow':
          '1px 1px 6px 0px #cacaca'
      };
      this.fmService.changeFilter(this.minPrice, this.maxPrice);
    } else {
      this.rangeError = true;
      this.dangerColor = {
        'box-shadow':
          '1px 1px 6px 0px #ff0000'
      };
    }

  }
  changeOrderNow(typ, mth) {
    this.type = typ;
    this.method = mth;
    this.fmService.changeOrder(this.type, this.method);
  }

  onBrandSelect() {
    this.fmService.setSelectedBrand(this.checkedBrand());
  }

  checkedBrand() {
    return this.mobileBrand.filter((item: { brandSelected: any; }) => item.brandSelected);
  }

  functionToClear() {
    this.minPrice = '';
    this.maxPrice = '';
    this.mobileBrand.forEach(element => {
      element.brandSelected = false;
    });
    this.mobileRam.forEach(element => {
      element.ramSelected = false;
    });
  }

  onRamSelect() {
    this.fmService.setSelectedRam(this.checkedRam());
  }

  checkedRam() {
    return this.mobileRam.filter((item: { ramSelected: any; }) => item.ramSelected);
  }
  onRomSelect() {
    this.fmService.setSelectedRom(this.checkedRom());
  }

  checkedRom() {
    return this.mobileRom.filter((item: { romSelected: any; }) => item.romSelected);
  }
}
