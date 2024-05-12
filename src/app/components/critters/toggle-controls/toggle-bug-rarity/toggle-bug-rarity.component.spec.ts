import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleBugRarityComponent } from './toggle-bug-rarity.component';

describe('ToggleBugRarityComponent', () => {
  let component: ToggleBugRarityComponent;
  let fixture: ComponentFixture<ToggleBugRarityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleBugRarityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleBugRarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
