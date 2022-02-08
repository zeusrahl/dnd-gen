import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalflingComponent } from './halfling.component';

describe('HalflingComponent', () => {
  let component: HalflingComponent;
  let fixture: ComponentFixture<HalflingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalflingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalflingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
