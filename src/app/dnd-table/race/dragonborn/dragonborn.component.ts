/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-25T12:59:13-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T11:53:13-05:00
 */



import { Component, OnInit } from '@angular/core';
import { CharClass, DnDCharacter } from '../../character-builder.service';
import { DndCharacterData } from '../../dnd-character-data';
import { DndCharacterComponent } from '../../dnd-character/dnd-character.component';

@Component({
  selector: 'app-dragonborn',
  templateUrl: './dragonborn.component.html',
  styleUrls: ['./dragonborn.component.scss']
})
export class DragonbornComponent extends DndCharacterData implements OnInit {

    constructor(charClass: CharClass) {
      // super constructor
      super("dragonborn", charClass)
      this.statBlock.strength += 2
      this.statBlock.charisma += 1

    }
    ngOnInit(): void {
  }

}
