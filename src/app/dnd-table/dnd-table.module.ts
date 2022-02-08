/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-11T20:22:58-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T21:51:37-05:00
 */



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { DndCharacterComponent } from './dnd-character/dnd-character.component';
// import { ElfComponent } from './race/elf/elf.component';
import { DndTableComponent } from './dnd-table/dnd-table.component';
import { BarbarianComponent } from './class/barbarian/barbarian.component';
import { BardComponent } from './class/bard/bard.component';
import { ClericComponent } from './class/cleric/cleric.component';
import { DruidComponent } from './class/druid/druid.component';
import { FighterComponent } from './class/fighter/fighter.component';
import { MonkComponent } from './class/monk/monk.component';
import { PaladinComponent } from './class/paladin/paladin.component';
import { RangerComponent } from './class/ranger/ranger.component';
import { RogueComponent } from './class/rogue/rogue.component';
import { SorcererComponent } from './class/sorcerer/sorcerer.component';
import { WarlockComponent } from './class/warlock/warlock.component';
import { WizardComponent } from './class/wizard/wizard.component';
// import { DwarfComponent } from './race/dwarf/dwarf.component';
// import { HalflingComponent } from './race/halfling/halfling.component';
// import { HumanComponent } from './race/human/human.component';
// import { DragonbornComponent } from './race/dragonborn/dragonborn.component';
// import { GnomeComponent } from './race/gnome/gnome.component';
// import { HalfElfComponent } from './race/half-elf/half-elf.component';
// import { HalfOrcComponent } from './race/half-orc/half-orc.component';
// import { TieflingComponent } from './race/tiefling/tiefling.component';



@NgModule({
  declarations: [
    DndCharacterComponent,
    // ElfComponent,
    DndTableComponent,
    BarbarianComponent,
    BardComponent,
    ClericComponent,
    DruidComponent,
    FighterComponent,
    MonkComponent,
    PaladinComponent,
    RangerComponent,
    RogueComponent,
    SorcererComponent,
    WarlockComponent,
    WizardComponent,
    // DwarfComponent,
    // HalflingComponent,
    // HumanComponent,
    // DragonbornComponent,
    // GnomeComponent,
    // HalfElfComponent,
    // HalfOrcComponent,
    // TieflingComponent
  ],
  exports: [
    DndTableComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class DndTableModule { }
