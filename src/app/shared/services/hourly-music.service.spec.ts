import { TestBed } from '@angular/core/testing';

import { HourlyMusicService } from './hourly-music.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HourlyMusicService', () => {
  let service: HourlyMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(HourlyMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
