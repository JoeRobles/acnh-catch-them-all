import { TestBed } from '@angular/core/testing';

import { CritterApiService } from './critter-api.service';

describe('CritterApiService', () => {
  let service: CritterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CritterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
