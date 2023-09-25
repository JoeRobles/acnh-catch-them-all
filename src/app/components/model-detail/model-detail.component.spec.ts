import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDetailComponent } from './model-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModelDetailComponent', () => {
  let component: ModelDetailComponent;
  let fixture: ComponentFixture<ModelDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ ModelDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
