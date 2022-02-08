import { ElfComponent } from './race/elf/elf';
import { HalfElfComponent } from './race/half-elf/half-elf';
/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-11T20:34:04-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T22:00:53-05:00
 */

import { Injectable } from '@angular/core';



export type Race = "human" | "elf" | "halfling" | "half-orc" | "dwarf" | "dragonborn" | "gnome" | "half-elf" | "tiefling"

export type CharClass = "bard" | "barbarian" | "wizard" | "cleric" | "rogue" | "druid" | "fighter" | "monk" | "paladin" | "ranger" | "sorcerer" | "warlock"

export type Ability = "strength" | "dexterity" | "constitution" | "wisdom" | "intelligence" | "charisma"

export interface StatBlock {
  strength: number;
  dexterity: number;
  constitution: number;
  wisdom: number;
  intelligence: number;
  charisma: number
}

export interface DnDCharacter {
  statBlock: StatBlock;

  race: Race; // add more races later

  charClass: CharClass; // add more classes
}

@Injectable({
  providedIn: 'root'
})
export class CharacterBuilderService {
  characters: DnDCharacter[] = [];
  results:number[] = new Array(4)

  constructor() { }

  private randomStats(): StatBlock {
      const statBlock = {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        wisdom: 10,
        intelligence: 10,
        charisma: 10
      }

      for (let attribute in statBlock) {
        // this.results = [];

        for (var i = 0; i<this.results.length;i++) {
          this.results[i] = Math.floor(1+Math.random()*6)
        };

        (<any>statBlock)[attribute] = this.results.reduce((a, b) => a + b, 0) - Math.min(...this.results)
        console.log(attribute, this.results);

        // (<any>statBlock)[attribute] = Math.floor(1+Math.random()*12)
      };
      console.log(statBlock, this.results);
      return statBlock
    }

  loadCharacters() {
    this.characters.push({
      statBlock: this.randomStats(),
      race: "elf",
      charClass: "bard"
    });
    this.characters.push({
      statBlock: this.randomStats(),
      race: "dwarf",
      charClass: "warlock"
    });
    this.characters.push(new ElfComponent("ranger"));
    this.characters.push(new HalfElfComponent('barbarian'));
  }
}
