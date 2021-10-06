import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartlistComponent } from './smartlist.component';

describe('SmartlistComponent', () => {
  let component: SmartlistComponent;
  let fixture: ComponentFixture<SmartlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
