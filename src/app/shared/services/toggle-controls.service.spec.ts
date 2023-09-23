import { TestBed } from '@angular/core/testing';

import { ToggleControlsService } from './toggle-controls.service';

describe('ToggleControlsService', () => {
  let service: ToggleControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
