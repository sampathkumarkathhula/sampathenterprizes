import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackordersComponent } from './trackorders.component';

describe('TrackordersComponent', () => {
  let component: TrackordersComponent;
  let fixture: ComponentFixture<TrackordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
