import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSeaShadowsComponent } from './toggle-sea-shadows.component';

describe('ToggleSeaShadowsComponent', () => {
  let component: ToggleSeaShadowsComponent;
  let fixture: ComponentFixture<ToggleSeaShadowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleSeaShadowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleSeaShadowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
