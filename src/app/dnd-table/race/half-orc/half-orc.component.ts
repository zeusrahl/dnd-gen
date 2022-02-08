/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-25T12:59:48-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T11:54:27-05:00
 */



 import { Component, OnInit } from '@angular/core';
 import { CharClass, DnDCharacter } from '../../character-builder.service';
 import { DndCharacterData } from '../../dnd-character-data';
 import { DndCharacterComponent } from '../../dnd-character/dnd-character.component';

@Component({
  selector: 'app-half-orc',
  templateUrl: './half-orc.component.html',
  styleUrls: ['./half-orc.component.scss']
})
export class HalfOrcComponent extends DndCharacterData implements OnInit {

    constructor(charClass: CharClass) {
      // super constructor
      super("half-orc", charClass)
      this.statBlock.strength += 2
      this.statBlock.constitution += 1

    }
    ngOnInit(): void {
  }

}