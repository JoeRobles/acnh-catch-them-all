import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFishRarityComponent } from './toggle-fish-rarity.component';

describe('ToggleFishRarityComponent', () => {
  let component: ToggleFishRarityComponent;
  let fixture: ComponentFixture<ToggleFishRarityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleFishRarityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleFishRarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
