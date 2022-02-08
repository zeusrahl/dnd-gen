import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarlockComponent } from './warlock.component';

describe('WarlockComponent', () => {
  let component: WarlockComponent;
  let fixture: ComponentFixture<WarlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
