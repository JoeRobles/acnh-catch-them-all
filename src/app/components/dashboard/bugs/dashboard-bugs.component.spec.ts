import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBugsComponent } from './dashboard-bugs.component';

describe('DashboardBugsComponent', () => {
  let component: DashboardBugsComponent;
  let fixture: ComponentFixture<DashboardBugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBugsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
