import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndInventoryComponent } from './dnd-inventory.component';

describe('DndInventoryComponent', () => {
  let component: DndInventoryComponent;
  let fixture: ComponentFixture<DndInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DndInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DndInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
