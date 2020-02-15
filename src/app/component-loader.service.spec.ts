import { TestBed } from '@angular/core/testing';

import { ComponentLoaderService } from './component-loader.service';

describe('ComponentLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentLoaderService = TestBed.get(ComponentLoaderService);
    expect(service).toBeTruthy();
  });
});
