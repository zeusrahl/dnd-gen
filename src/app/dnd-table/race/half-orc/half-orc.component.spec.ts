import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfOrcComponent } from './half-orc.component';

describe('HalfOrcComponent', () => {
  let component: HalfOrcComponent;
  let fixture: ComponentFixture<HalfOrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfOrcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfOrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
