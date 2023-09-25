import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterDiscoveryComponent } from './critter-discovery.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CritterDiscoveryComponent', () => {
  let component: CritterDiscoveryComponent;
  let fixture: ComponentFixture<CritterDiscoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ CritterDiscoveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CritterDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
