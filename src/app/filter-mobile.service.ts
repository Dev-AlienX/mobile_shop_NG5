import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterMobileService {
  brandList: any[];
  ramList: any[];
  romList: any[];
  // brand filter data
  private brandFilterData = new BehaviorSubject(this.brandList);
  currentBrandFilter = this.brandFilterData.asObservable();
  // ram filter data
  private ramFilterData = new BehaviorSubject(this.ramList);
  currentRamFilter = this.ramFilterData.asObservable();
  // rom filter data
  private romFilterData = new BehaviorSubject(this.romList);
  currentRomFilter = this.romFilterData.asObservable();
  // price filter data min price
  private minFilterSource = new BehaviorSubject('');
  currentMinFilter = this.minFilterSource.asObservable();
  // price filter data max price
  private maxFilterSource = new BehaviorSubject('');
  currentMaxFilter = this.maxFilterSource.asObservable();
  // order by filter type
  private filterTypeSource = new BehaviorSubject('');
  orderFilterType = this.filterTypeSource.asObservable();
  // order by filter method
  private filterMethodSource = new BehaviorSubject('');
  orderFilterMethod = this.filterMethodSource.asObservable();
  type = 'brand';
  method = 'asc';
  constructor() { }
  // update min max price
  changeFilter(minFilter: string, maxFilter: string) {
    this.minFilterSource.next(minFilter);
    this.maxFilterSource.next(maxFilter);
  }
  changeOrder(type: string, method: string) {
    this.filterTypeSource.next(type);
    this.filterMethodSource.next(method);
  }
  // update selected brand
  setSelectedBrand(data: any[]) {
    this.brandFilterData.next(data);
  }
  setSelectedRam(data: any[]) {
    this.ramFilterData.next(data);
  }
  setSelectedRom(data: any[]) {
    this.romFilterData.next(data);
  }
}
