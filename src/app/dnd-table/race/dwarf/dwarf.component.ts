/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-25T12:58:32-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T11:53:45-05:00
 */



 import { Component, OnInit } from '@angular/core';
 import { CharClass, DnDCharacter } from '../../character-builder.service';
 import { DndCharacterData } from '../../dnd-character-data';
 import { DndCharacterComponent } from '../../dnd-character/dnd-character.component';

@Component({
  selector: 'app-dwarf',
  templateUrl: './dwarf.component.html',
  styleUrls: ['./dwarf.component.scss']
})
export class DwarfComponent extends DndCharacterData implements OnInit {

  constructor(charClass: CharClass) {
    // super constructor
    super("dwarf", charClass)
    this.statBlock.constitution += 2
    this.statBlock.wisdom += 1 // hill dwarf
    // this.statBlock.strength += 2 (this if for mountain dwarf)
  }

  ngOnInit(): void {
  }

}
