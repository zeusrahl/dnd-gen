/**
 * @Author: dotsonkellyfam
 * @Date:   2022-02-13T21:53:52-05:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-14T20:26:42-05:00
 */



import { Injectable } from '@angular/core';

export interface Spell {
  spellName : string,
  spellLevel: number,
  school : string,
  castingTime : string,
  range: string,
  /**
    * spell components have one or more options: verbal, somatic, or materials
    * material components need to be a string if 'true'
    */
  spellComponents : [
    verbal ?: boolean, // why is this a different color
    somatic ?: boolean,
    material ?: string,
  ],
  duration: string,
  saveAbility ?: string,
  attackModifer ?: number,
  concentration ?: boolean,
  description : string,
  availableTo: string[]
}

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor() { }
}
