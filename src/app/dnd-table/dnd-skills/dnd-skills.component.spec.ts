import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndSkillsComponent } from './dnd-skills.component';

describe('DndSkillsComponent', () => {
  let component: DndSkillsComponent;
  let fixture: ComponentFixture<DndSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DndSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DndSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
