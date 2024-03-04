import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleArtCertComponent } from './toggle-art-cert.component';

describe('ToggleArtCertComponent', () => {
  let component: ToggleArtCertComponent;
  let fixture: ComponentFixture<ToggleArtCertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleArtCertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleArtCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
