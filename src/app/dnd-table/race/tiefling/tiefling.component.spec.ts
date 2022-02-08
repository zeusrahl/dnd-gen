import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TieflingComponent } from './tiefling.component';

describe('TieflingComponent', () => {
  let component: TieflingComponent;
  let fixture: ComponentFixture<TieflingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TieflingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TieflingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
