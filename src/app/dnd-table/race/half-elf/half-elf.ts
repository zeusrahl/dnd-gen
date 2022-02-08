/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-25T12:59:38-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T18:50:26-05:00
 */



import { Component, OnInit } from '@angular/core';
import { Ability, CharClass } from '../../character-builder.service';
import { DndCharacterData } from '../../dnd-character-data';
import { DndCharacterComponent } from '../../dnd-character/dnd-character.component';

export class HalfElfComponent extends DndCharacterData {

  choices:string[] = new Array(2);

  constructor(charClass: CharClass) {
    // super constructor
    super("half-elf", charClass)
    this.statBlock.charisma += 2
    this.modifyStatOne;
    this.modifyStatTwo;
    // the two choices above must be different, and not Charisma. Once choosing an ability, it should not allow a second pick of that ability.

  }


  // Methods
  modifyStatOne(ability: Ability) {
    if (ability == "charisma" || this.choices[1]) {
      console.error("Cannot pick charisma as secondary score improvement");
      throw new Error("Cannot pick charisma as secondary score improvement")
    }
    this.statBlock[ability] += 1;
    this.choices[0]=ability;
          // square brackets is how you do variable fields
  }

  modifyStatTwo(ability: Ability) {
    if (ability == "charisma" || this.choices[0]) {
      console.error("Cannot pick charisma as secondary score improvement");
      throw new Error("Cannot pick charisma as secondary score improvement")
    }
    this.statBlock[ability] += 1;
    this.choices[1]=ability;
          // square brackets is how you do variable fields
  }
  

}
