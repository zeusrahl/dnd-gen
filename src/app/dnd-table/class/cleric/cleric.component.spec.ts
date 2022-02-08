import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClericComponent } from './cleric.component';

describe('ClericComponent', () => {
  let component: ClericComponent;
  let fixture: ComponentFixture<ClericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
