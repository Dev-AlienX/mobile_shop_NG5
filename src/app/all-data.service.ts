import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MobileDataService {
  constructor(private http: HttpClient) { }
  mobileDataUrl = './assets/json/mobile.json';
  output: any;

  getMobileData() {
    return this.http.get(this.mobileDataUrl);
  }
}
