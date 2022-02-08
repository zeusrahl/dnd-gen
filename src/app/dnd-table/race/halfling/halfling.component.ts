/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-25T12:58:46-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T11:54:39-05:00
 */



 import { Component, OnInit } from '@angular/core';
 import { CharClass, DnDCharacter } from '../../character-builder.service';
 import { DndCharacterData } from '../../dnd-character-data';
 import { DndCharacterComponent } from '../../dnd-character/dnd-character.component';

@Component({
  selector: 'app-halfling',
  templateUrl: './halfling.component.html',
  styleUrls: ['./halfling.component.scss']
})
export class HalflingComponent extends DndCharacterData implements OnInit {

    constructor(charClass: CharClass) {
      // super constructor
      super("halfling", charClass)
      this.statBlock.dexterity += 2
      this.statBlock.charisma += 1 // Lightfoot Halfling
      // this.statBlock.constitution += 1 (this is for Stout Halfling)

    }
    ngOnInit(): void {
  }

}
