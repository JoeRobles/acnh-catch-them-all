import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSongGenreComponent } from './toggle-song-genre.component';

describe('ToggleSongGenreComponent', () => {
  let component: ToggleSongGenreComponent;
  let fixture: ComponentFixture<ToggleSongGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleSongGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleSongGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
