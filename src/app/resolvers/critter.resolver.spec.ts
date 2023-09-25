import { TestBed } from '@angular/core/testing';

import { CritterResolver } from './critter.resolver';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CritterResolver', () => {
  let resolver: CritterResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    resolver = TestBed.inject(CritterResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
