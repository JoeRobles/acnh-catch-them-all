import { TestBed } from '@angular/core/testing';

import { CritterService } from './critter.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CritterService', () => {
  let service: CritterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(CritterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
