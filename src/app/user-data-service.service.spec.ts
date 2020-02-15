import { TestBed } from '@angular/core/testing';

import { UserDataServiceService } from './user-data-service.service';

describe('UserDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDataServiceService = TestBed.get(UserDataServiceService);
    expect(service).toBeTruthy();
  });
});
