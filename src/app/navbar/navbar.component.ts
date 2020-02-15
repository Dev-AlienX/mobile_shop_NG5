import { Component, OnInit, HostListener } from '@angular/core';
import { SearchInputService } from '../search-input.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchText: string;
  search: string;
  screenWidth: number;
  searchActive = false;
  constructor(private siService: SearchInputService, ) { }
  data1: string;


  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.data1 = 'The content is displayed from Demo1 component';
    this.siService.currentSearch.subscribe(search => this.searchText = search);
  }
  newSearch() {
    this.siService.changeSearch(this.searchText);
  }
  showSearch() {
    this.searchActive = true;
  }
  hideSearch() {
    this.searchActive = false;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
  }
}
