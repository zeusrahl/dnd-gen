/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-11T20:36:17-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T15:41:56-05:00
 */

import { Component, OnInit } from '@angular/core';
import { CharClass, DnDCharacter } from '../../character-builder.service';
import { DndCharacterData } from '../../dnd-character-data';
import { DndCharacterComponent } from '../../dnd-character/dnd-character.component';

export class ElfComponent extends DndCharacterData {

  constructor(charClass: CharClass) {
    // super constructor
    super('elf', charClass)
    this.statBlock.dexterity += 2
    this.statBlock.intelligence += 1 // high elf
    // this.statBlock.wisdom += 1 (this is for wood elf)
  }
}
