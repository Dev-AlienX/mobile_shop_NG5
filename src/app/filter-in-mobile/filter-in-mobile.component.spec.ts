import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInMobileComponent } from './filter-in-mobile.component';

describe('FilterInMobileComponent', () => {
  let component: FilterInMobileComponent;
  let fixture: ComponentFixture<FilterInMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterInMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterInMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
