/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-25T12:59:25-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T11:54:05-05:00
 */



 import { Component, OnInit } from '@angular/core';
 import { CharClass, DnDCharacter } from '../../character-builder.service';
 import { DndCharacterData } from '../../dnd-character-data';
 import { DndCharacterComponent } from '../../dnd-character/dnd-character.component';

@Component({
  selector: 'app-gnome',
  templateUrl: './gnome.component.html',
  styleUrls: ['./gnome.component.scss']
})
export class GnomeComponent extends DndCharacterData implements OnInit {

    constructor(charClass: CharClass) {
      // super constructor
      super("gnome", charClass)
      this.statBlock.intelligence += 2
      this.statBlock.constitution += 1 // Rock Gnome
      // this.statBlock.wisdom += 1 (this is for wood elf)

    }
    ngOnInit(): void {
  }

}
