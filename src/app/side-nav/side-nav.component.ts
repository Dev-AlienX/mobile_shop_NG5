import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BrandFilterPipe } from '../brand-filter.pipe';
import { CapitalizePipe } from '../capitalize.pipe';
import { UniquePipe } from '../unique.pipe';
import { SearchInputService } from '../search-input.service';
import { MobileDataService } from '../all-data.service';
import { FilterMobileService } from '../filter-mobile.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnChanges {
  @Input() innerWidth: any;
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

  constructor(private siService: SearchInputService, private mdService: MobileDataService, private fmService: FilterMobileService) {
  }

  ngOnInit() {
    this.siService.currentSearch.subscribe(search => this.searchText = search);
    this.fmService.currentMinFilter.subscribe(minPriceFl => this.minPrice = minPriceFl);
    this.fmService.currentMaxFilter.subscribe(maxPriceFl => this.maxPrice = maxPriceFl);
    this.fmService.currentBrandFilter.subscribe(selectedBrand => this.brandSelected = selectedBrand);
    this.fmService.currentRamFilter.subscribe(selectedRam => this.ramSelected = selectedRam);
    this.fmService.currentRomFilter.subscribe(selectedRom => this.romSelected = selectedRom);
    this.allMobData = this.mdService.getMobileData().subscribe(
      (data) => {
        this.mobileDetail = data;
        this.mobileBrand = data;
        this.mobileRam = data;
        this.mobileRom = data;
      }, (err) => {
        console.log('Error ', err);
      }
    );
  }
  ngOnChanges() {
  }
  // afterData() {
  //   this.mobileBrand = this.mobileDetail;
  //   // tslint:disable-next-line: prefer-for-of
  //   // for (let i = 0; i < this.mobileDetail.length; i++) {
  //   //   this.mobileBrand.push(this.mobileDetail[i].brand);
  //   // }
  // }
  newSearch() {
    this.siService.changeSearch(this.searchText);
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

  onBrandSelect() {
    this.fmService.setSelectedBrand(this.checkedBrand());
  }

  checkedBrand() {
    return this.mobileBrand.filter((item: { brandSelected: any; }) => item.brandSelected);
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
