import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSeaSpeedsComponent } from './toggle-sea-speeds.component';

describe('ToggleSeaSpeedsComponent', () => {
  let component: ToggleSeaSpeedsComponent;
  let fixture: ComponentFixture<ToggleSeaSpeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleSeaSpeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleSeaSpeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
