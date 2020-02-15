import { TestBed } from '@angular/core/testing';

import { AllDataService } from './all-data.service';

describe('AllDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllDataService = TestBed.get(AllDataService);
    expect(service).toBeTruthy();
  });
});
