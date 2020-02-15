import { TestBed } from '@angular/core/testing';

import { SearchInputService } from './search-input.service';

describe('SearchInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchInputService = TestBed.get(SearchInputService);
    expect(service).toBeTruthy();
  });
});
