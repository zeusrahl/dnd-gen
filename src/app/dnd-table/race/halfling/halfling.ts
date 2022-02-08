/**
 * @Author: dotsonkellyfam
 * @Date:   2022-02-06T15:42:31-05:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T15:45:38-05:00
 */

 import { Component, OnInit } from '@angular/core';
 import { CharClass, DnDCharacter } from '../../character-builder.service';
 import { DndCharacterData } from '../../dnd-character-data';
 import { DndCharacterComponent } from '../../dnd-character/dnd-character.component';

 export class HalflingComponent extends DndCharacterData {

   constructor(charClass: CharClass) {
     // super constructor
     super('halfling', charClass)
     this.statBlock.dexterity += 2
     this.statBlock.charisma += 1 // Lightfoot Halfling
     // this.statBlock.constitution += 1 (this is for Stout Halfling)
   }
 }
