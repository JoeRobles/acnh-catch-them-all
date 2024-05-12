import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimeDisplayComponent } from './datetime-display.component';

describe('DatetimeDisplayComponent', () => {
  let component: DatetimeDisplayComponent;
  let fixture: ComponentFixture<DatetimeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatetimeDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatetimeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
