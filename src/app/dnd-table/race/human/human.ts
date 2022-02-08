/**
 * @Author: dotsonkellyfam
 * @Date:   2022-02-06T15:43:22-05:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T15:44:47-05:00
 */

 import { Component, OnInit } from '@angular/core';
 import { CharClass, DnDCharacter } from '../../character-builder.service';
 import { DndCharacterData } from '../../dnd-character-data';
 import { DndCharacterComponent } from '../../dnd-character/dnd-character.component';

 export class HumanComponent extends DndCharacterData {

   constructor(charClass: CharClass) {
     // super constructor
     super('human', charClass)
     this.statBlock.strength += 1
     this.statBlock.dexterity += 1
     this.statBlock.constitution += 1
     this.statBlock.wisdom += 1
     this.statBlock.intelligence += 1
     this.statBlock.charisma += 1
   }
 }
