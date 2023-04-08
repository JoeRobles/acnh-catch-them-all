import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterLegendComponent } from './critter-legend.component';

describe('CritterLegendComponent', () => {
  let component: CritterLegendComponent;
  let fixture: ComponentFixture<CritterLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CritterLegendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CritterLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
