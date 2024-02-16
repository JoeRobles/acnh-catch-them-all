import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleBugLocationComponent } from './toggle-bug-location.component';

describe('ToggleBugLocationComponent', () => {
  let component: ToggleBugLocationComponent;
  let fixture: ComponentFixture<ToggleBugLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleBugLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleBugLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
