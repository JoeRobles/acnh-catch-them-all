import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleGenreComponent } from './toggle-genre.component';

describe('ToggleGenreComponent', () => {
  let component: ToggleGenreComponent;
  let fixture: ComponentFixture<ToggleGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
