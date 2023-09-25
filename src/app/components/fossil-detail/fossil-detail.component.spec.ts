import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FossilDetailComponent } from './fossil-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FossilDetailComponent', () => {
  let component: FossilDetailComponent;
  let fixture: ComponentFixture<FossilDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ FossilDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FossilDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
