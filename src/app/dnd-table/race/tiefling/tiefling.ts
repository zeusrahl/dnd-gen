/**
 * @Author: dotsonkellyfam
 * @Date:   2022-02-06T15:45:51-05:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T15:46:31-05:00
 */

 import { Component, OnInit } from '@angular/core';
 import { CharClass, DnDCharacter } from '../../character-builder.service';
 import { DndCharacterData } from '../../dnd-character-data';
 import { DndCharacterComponent } from '../../dnd-character/dnd-character.component';

 export class DragonbornComponent extends DndCharacterData {

   constructor(charClass: CharClass) {
     // super constructor
     super('dragonborn', charClass)
     this.statBlock.charisma += 2
     this.statBlock.intelligence += 1 // high elf
     // this.statBlock.wisdom += 1 (this is for wood elf)
   }
 }
