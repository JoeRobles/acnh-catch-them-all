import { TestBed } from '@angular/core/testing';

import { CritterResolver } from './critter.resolver';

describe('CritterResolver', () => {
  let resolver: CritterResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CritterResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
