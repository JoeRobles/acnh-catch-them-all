import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterSeasonalityComponent } from './critter-seasonality.component';

describe('CritterSeasonalityComponent', () => {
  let component: CritterSeasonalityComponent;
  let fixture: ComponentFixture<CritterSeasonalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CritterSeasonalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CritterSeasonalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
