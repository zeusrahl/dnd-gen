import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorcererComponent } from './sorcerer.component';

describe('SorcererComponent', () => {
  let component: SorcererComponent;
  let fixture: ComponentFixture<SorcererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorcererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorcererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
