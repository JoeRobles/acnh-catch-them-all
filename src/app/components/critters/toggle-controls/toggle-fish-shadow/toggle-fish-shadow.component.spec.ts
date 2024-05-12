import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFishShadowComponent } from './toggle-fish-shadow.component';

describe('ToggleFishShadowComponent', () => {
  let component: ToggleFishShadowComponent;
  let fixture: ComponentFixture<ToggleFishShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleFishShadowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleFishShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
