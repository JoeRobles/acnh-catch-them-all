import { TestBed } from '@angular/core/testing';

import { HourlyMusicResolver } from './hourly-music.resolver';

describe('HourlyMusicResolver', () => {
  let resolver: HourlyMusicResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HourlyMusicResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
