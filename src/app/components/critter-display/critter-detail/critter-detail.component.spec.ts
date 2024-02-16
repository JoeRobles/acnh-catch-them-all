import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterDetailComponent } from './critter-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CritterDetailComponent', () => {
  let component: CritterDetailComponent;
  let fixture: ComponentFixture<CritterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ CritterDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CritterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
