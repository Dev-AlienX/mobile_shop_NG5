import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecendComponent } from './secend.component';

describe('SecendComponent', () => {
  let component: SecendComponent;
  let fixture: ComponentFixture<SecendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
