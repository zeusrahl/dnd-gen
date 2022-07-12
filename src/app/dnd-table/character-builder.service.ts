
/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-11T20:34:04-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-07-12T15:09:11-04:00
 */

import { Injectable } from '@angular/core';
import { DndCharacterData } from './dnd-character-data';

export type Race = "dragonborn" | "dwarf" | "elf" | "gnome" | "half-elf" | "half-orc" | "halfling" | "human" | "tiefling"

export type SubRace = "none" | "hill" | "mountain" | "high" | "eladrin" | "wood" | "rock" | "lightfoot" | "stout" | "non-variant" | "variant"

export type CharClass = "none" | "bard" | "barbarian" | "wizard" | "cleric" | "rogue" | "druid" | "fighter" | "monk" | "paladin" | "ranger" | "sorcerer" | "warlock"

export type SubClass = "none" | "berserker" | "lore" | "life" | "arctic" | "coast" | "desert" | "forest" | "grassland" | "mountain" | "swamp" | "underdark" | "champion" | "open" | "devotion" | "hunter" | "thief" | "draconic" | "fiend" | "evocation"

export type Ability = "strength" | "dexterity" | "constitution" | "wisdom" | "intelligence" | "charisma"

export type Skill = "acrobatics" | "animal handling" | "arcana" | "athletics" | "deception" | "history" | "insight" | "intimidation" | "investigation" | "medicine" | "nature" | "perception" | "performance" | "persuasion" | "religion" | "sleight of hand" | "stealth" | "survival"

export type ProBonus = 2 | 3 | 4 | 5 | 6

/**
export interface StatBlock {
  str: {
    name: "strength";
    value: number;
    modifier: {
      name: "strengthMod";
      value: number // floor(str.value/2-5)
    }
  }
  // repeat process for dex, con, wis, int, & cha
}
*/


export interface StatBlock {
  strength: number;
  dexterity: number;
  constitution: number;
  wisdom: number;
  intelligence: number;
  charisma: number
}

export interface StatMod {
  strengthMod: number;
  dexterityMod: number;
  constitutionMod: number;
  wisdomMod: number;
  intelligenceMod: number;
  charimsaMod: number
}

export interface DnDCharacter {
  // stagnent 'statBlock' to be reused when changing races
  statBlock: StatBlock;

  // this will be generated using racial Modifiers from 'statBlock' above
  modStatBlock?: StatBlock;

  // this will be replaced soon with an updated statBlock interface
  statMod?: StatMod; //floor(statBlock/2 - 5)

  // this shouldn't be optional, but will update later
  proficiencyBonus?: ProBonus; // ceiling(level/4+1)

  race: Race; // add more races later

  subRace?: SubRace;

  charClass: CharClass; // add more classes

  subClass?: SubClass;

  // this shouldn't be optional, but will update later
  skills: Skill[];

  newStats: () => void;
}



@Injectable({
  providedIn: 'root'
})
export class CharacterBuilderService {
  characters: DnDCharacter[] = [];
  // results:number[] = new Array(4)

  constructor() { }

  loadCharacters() {
    this.characters.push(new DndCharacterData("elf", "wood"));
  }

  // loadCharacter(race: Race, charClass: CharClass) {
  //   this.characters.push(new race({charClass}))
  // }
}
