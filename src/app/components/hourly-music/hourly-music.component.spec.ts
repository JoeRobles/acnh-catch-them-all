import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyMusicComponent } from './hourly-music.component';

describe('HourlyMusicComponent', () => {
  let component: HourlyMusicComponent;
  let fixture: ComponentFixture<HourlyMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourlyMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
