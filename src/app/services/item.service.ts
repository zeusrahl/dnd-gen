/**
 * @Author: dotsonkellyfam
 * @Date:   2022-02-14T21:36:20-05:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-03-28T21:34:24-04:00
 */



import { Injectable } from '@angular/core';
import { Ability } from '../dnd-table/character-builder.service';

export interface Item {
  itemName: string,
  cost ?: string,
  weight ?: string,
  description: string,
  rarity : string,
  /**
    * should this be set up as:
    * weapon ?: {
      [weaponID:string] : Weapon
    },
    * followed by using a new `export interface Weapon`?
    * Should Armor and SpellFocus be similarly set up?
    */
  weapon?: {
    weaponType: string[],
    attack: {
      attackSkill : Ability,
      attackMod : number,
    },
    damage: {
      damageSkill : Ability,
      damageMod : number,
      damageDice : string,
      damageType : string,
    },
  },
  armor?: {
    armorType : string,
    armorScore ?: number,
    armorMod ?: number,
  },
  spellFocus?: {
    focus : string,
    spellAttack ?: number,
    difficultyClassMod ?: number,
  }
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
}
