/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-25T12:59:57-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T11:55:15-05:00
 */



 import { Component, OnInit } from '@angular/core';
 import { CharClass, DnDCharacter } from '../../character-builder.service';
 import { DndCharacterData } from '../../dnd-character-data';
 import { DndCharacterComponent } from '../../dnd-character/dnd-character.component';

@Component({
  selector: 'app-tiefling',
  templateUrl: './tiefling.component.html',
  styleUrls: ['./tiefling.component.scss']
})
export class TieflingComponent extends DndCharacterData implements OnInit {

    constructor(charClass: CharClass) {
      // super constructor
      super("elf", charClass)
      this.statBlock.charisma += 2
      this.statBlock.intelligence += 1 // high elf
      // this.statBlock.wisdom += 1 (this is for wood elf)

    }
    ngOnInit(): void {
  }

}
