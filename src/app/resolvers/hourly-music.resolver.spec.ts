import { TestBed } from '@angular/core/testing';

import { HourlyMusicResolver } from './hourly-music.resolver';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HourlyMusicResolver', () => {
  let resolver: HourlyMusicResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    resolver = TestBed.inject(HourlyMusicResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
