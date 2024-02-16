import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterLegendComponent } from './critter-legend.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CritterLegendComponent', () => {
  let component: CritterLegendComponent;
  let fixture: ComponentFixture<CritterLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
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
