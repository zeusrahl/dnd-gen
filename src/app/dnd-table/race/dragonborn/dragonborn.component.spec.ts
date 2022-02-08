import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonbornComponent } from './dragonborn.component';

describe('DragonbornComponent', () => {
  let component: DragonbornComponent;
  let fixture: ComponentFixture<DragonbornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonbornComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonbornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
