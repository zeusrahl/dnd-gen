/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-11T20:22:58-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-05-21T10:05:34-04:00
 */



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DndCharacterComponent } from './dnd-character/dnd-character.component';
// import { Elf } from './race/elf/elf.component';
import { DndTableComponent } from './dnd-table/dnd-table.component';
import { DndSkillsComponent } from './dnd-skills/dnd-skills.component';
import { DndInventoryComponent } from './dnd-inventory/dnd-inventory.component';


@NgModule({
  declarations: [
    DndCharacterComponent,
    DndTableComponent,
    DndSkillsComponent,
    DndInventoryComponent
  ],
  exports: [
    DndTableComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DndTableModule { }
