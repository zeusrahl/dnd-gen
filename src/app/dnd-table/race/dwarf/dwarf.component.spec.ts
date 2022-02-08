import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwarfComponent } from './dwarf.component';

describe('DwarfComponent', () => {
  let component: DwarfComponent;
  let fixture: ComponentFixture<DwarfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwarfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwarfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
