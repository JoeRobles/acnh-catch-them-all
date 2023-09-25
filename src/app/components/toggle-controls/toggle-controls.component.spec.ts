import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleControlsComponent } from './toggle-controls.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ToggleControlsComponent', () => {
  let component: ToggleControlsComponent;
  let fixture: ComponentFixture<ToggleControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ ToggleControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
