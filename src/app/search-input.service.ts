import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SearchInputService {
  private messageSource = new BehaviorSubject('');
  currentSearch = this.messageSource.asObservable();

  constructor() { }

  changeSearch(search: string) {
    this.messageSource.next(search);
  }

}