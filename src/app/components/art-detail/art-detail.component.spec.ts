import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDetailComponent } from './art-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArtDetailComponent', () => {
  let component: ArtDetailComponent;
  let fixture: ComponentFixture<ArtDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ ArtDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
