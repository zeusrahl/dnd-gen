/**
 * @Author: dotsonkellyfam
 * @Date:   2022-02-06T15:37:41-05:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T15:45:21-05:00
 */

 import { Component, OnInit } from '@angular/core';
 import { CharClass, DnDCharacter } from '../../character-builder.service';
 import { DndCharacterData } from '../../dnd-character-data';
 import { DndCharacterComponent } from '../../dnd-character/dnd-character.component';

 export class GnomeComponent extends DndCharacterData {

   constructor(charClass: CharClass) {
     // super constructor
     super('gnome', charClass)
     this.statBlock.intelligence += 2
     this.statBlock.constitution += 1 // Rock Gnome
     // this.statBlock.wisdom += 1 (this is for wood elf)
   }
 }
