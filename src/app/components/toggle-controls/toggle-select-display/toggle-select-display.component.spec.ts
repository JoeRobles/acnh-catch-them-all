import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSelectDisplayComponent } from './toggle-select-display.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ToggleSelectDisplayComponent', () => {
  let component: ToggleSelectDisplayComponent;
  let fixture: ComponentFixture<ToggleSelectDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ ToggleSelectDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleSelectDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
