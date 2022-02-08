/**
 * @Author: dotsonkellyfam
 * @Date:   2022-02-06T15:40:43-05:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T15:41:50-05:00
 */

 import { Component, OnInit } from '@angular/core';
 import { CharClass, DnDCharacter } from '../../character-builder.service';
 import { DndCharacterData } from '../../dnd-character-data';
 import { DndCharacterComponent } from '../../dnd-character/dnd-character.component';

 export class HalfOrcComponent extends DndCharacterData {

   constructor(charClass: CharClass) {
     // super constructor
     super('half-orc', charClass)
     this.statBlock.strength += 2
     this.statBlock.constitution += 1 // high elf
     // this.statBlock.wisdom += 1 (this is for wood elf)
   }
 }
