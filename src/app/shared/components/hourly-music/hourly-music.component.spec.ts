import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyMusicComponent } from './hourly-music.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../shared/modules/material/material.module';

describe('HourlyMusicComponent', () => {
  let component: HourlyMusicComponent;
  let fixture: ComponentFixture<HourlyMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MaterialModule,
      ],
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
