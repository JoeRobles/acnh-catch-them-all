import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterActivityComponent } from './critter-activity.component';

describe('CritterActivityComponent', () => {
  let component: CritterActivityComponent;
  let fixture: ComponentFixture<CritterActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CritterActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CritterActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
