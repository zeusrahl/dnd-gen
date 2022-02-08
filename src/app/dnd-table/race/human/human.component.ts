/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-25T12:59:01-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T11:54:57-05:00
 */



 import { Component, OnInit } from '@angular/core';
 import { CharClass, DnDCharacter } from '../../character-builder.service';
 import { DndCharacterData } from '../../dnd-character-data';
 import { DndCharacterComponent } from '../../dnd-character/dnd-character.component';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.scss']
})
export class HumanComponent extends DndCharacterData implements OnInit {

    constructor(charClass: CharClass) {
      // super constructor
      super("human", charClass)
      this.statBlock.strength += 1
      this.statBlock.dexterity += 1
      this.statBlock.constitution += 1
      this.statBlock.wisdom += 1
      this.statBlock.intelligence += 1
      this.statBlock.charisma += 1

    }
    ngOnInit(): void {
  }

}
