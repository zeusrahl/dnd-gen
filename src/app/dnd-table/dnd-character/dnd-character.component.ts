/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-11T20:25:58-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-06-27T09:10:03-04:00
 */


import { Component, Input, OnInit } from '@angular/core';
import { DndTableComponent } from '../dnd-table/dnd-table.component';
import { CharClass, DnDCharacter, Race, StatBlock } from '../character-builder.service';
import { DndCharacterData } from '../dnd-character-data';
import { DndSkillsComponent } from '../dnd-skills/dnd-skills.component';

@Component({
  selector: 'app-dnd-character',
  templateUrl: './dnd-character.component.html',
  styleUrls: ['./dnd-character.component.scss']
})
export class DndCharacterComponent implements OnInit {

  /********************************************************************
    These are the fields of the class
    ********************************************************************/
   @Input() dndCharacterData!: DnDCharacter

   // another @Input() from dnd-table.component for "race" and "subRace" selected?, or should that be impeded in "character-builder.service"?

   traitOrder: string[] = ["strength", "dexterity", "constitution", "wisdom", "intelligence", "charisma"]

   results:number[] = new Array(4)

   modTraitOrder: string[] = ["strengthMod", "dexterityMod", "constitutionMod", "wisdomMod", "intelligenceMod", "charismaMod"]

  /********************************************************************
    These are the life cycle hooks
    ********************************************************************/

  constructor() {
  }

  ngOnInit(): void {
    console.log("Is dndCharacer Initialized? " + !!this.dndCharacterData)
  }

  ngOnChange(): void {

  }

  /********************************************************************
    These are accessors
    ********************************************************************/

  /********************************************************************
    These are the private methods
    ********************************************************************/

  /********************************************************************
    These are the public methods
    ********************************************************************/
    getTrait(val: string) {
      return (this.dndCharacterData?.statBlock as any)[val]
    }

    // this will be imbedded in statBlock, will be obsolete
    getMod(val: string) {
      return (this.dndCharacterData?.statMod as any)[val]
    }

    newStatsButtonClick() {
        this.dndCharacterData?.newStats()
      }

  }
