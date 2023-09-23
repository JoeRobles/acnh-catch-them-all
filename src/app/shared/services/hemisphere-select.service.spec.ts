import { TestBed } from '@angular/core/testing';

import { HemisphereSelectService } from './hemisphere-select.service';

describe('HemisphereSelectService', () => {
  let service: HemisphereSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HemisphereSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
