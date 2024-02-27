import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFishLocationComponent } from './toggle-fish-location.component';

describe('ToggleFishLocationComponent', () => {
  let component: ToggleFishLocationComponent;
  let fixture: ComponentFixture<ToggleFishLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleFishLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleFishLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
