import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemisphereSelectComponent } from './hemisphere-select.component';

describe('HemisphereSelectComponent', () => {
  let component: HemisphereSelectComponent;
  let fixture: ComponentFixture<HemisphereSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HemisphereSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HemisphereSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
