/**
 * @Author: dotsonkellyfam
 * @Date:   2022-02-06T15:36:12-05:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T15:45:03-05:00
 */

 import { Component, OnInit } from '@angular/core';
 import { CharClass, DnDCharacter } from '../../character-builder.service';
 import { DndCharacterData } from '../../dnd-character-data';
 import { DndCharacterComponent } from '../../dnd-character/dnd-character.component';

 export class DwarfComponent extends DndCharacterData {

   constructor(charClass: CharClass) {
     // super constructor
     super('dwarf', charClass)
     this.statBlock.constitution += 2
     this.statBlock.wisdom += 1 // hill dwarf
     // this.statBlock.strength += 2 (this if for mountain dwarf)
   }
 }
