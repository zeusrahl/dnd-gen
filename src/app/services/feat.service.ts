/**
 * @Author: dotsonkellyfam
 * @Date:   2022-03-28T21:00:34-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-03-28T21:43:41-04:00
 */



import { Injectable } from '@angular/core';

export interface Feat {
  featID: number,
  featName: string,
  featDescription: string,
  // some feats allow a choice on which ability is modified
  // should be a dropdown choice for those
  ability?: {
    abilityName: string,
    abilityScore: number,
  }
  // dropdown select options should be presented for feats that have choices for tool, skill, weapon, armor, or save proficiency of expertise.
  toolProf?: string[],
  skillProf?: string[],
  saveProf?: string,
  skillExp?: string,
  weaponProf?: string,
  armorProf?: string,
  armorMod?: number,
  // choice of spells given for some feats, some given
  featSpells?: string[],
  featSpellAbility?: string // a choice on ability
};

@Injectable({
  providedIn: 'root'
})

export class FeatService {

  constructor() { }
}
