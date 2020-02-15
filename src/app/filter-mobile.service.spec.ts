import { TestBed } from '@angular/core/testing';

import { FilterMobileService } from './filter-mobile.service';

describe('FilterMobileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterMobileService = TestBed.get(FilterMobileService);
    expect(service).toBeTruthy();
  });
});
