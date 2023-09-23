import { TestBed } from '@angular/core/testing';

import { HourlyMusicService } from './hourly-music.service';

describe('HourlyMusicService', () => {
  let service: HourlyMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HourlyMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
