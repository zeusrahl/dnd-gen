/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-11T20:39:06-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2021-10-11T21:34:06-04:00
 */



import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndTableComponent } from './dnd-table.component';

describe('DndTableComponent', () => {
  let component: DndTableComponent;
  let fixture: ComponentFixture<DndTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DndTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DndTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
