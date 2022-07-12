/**
 * @Author: dotsonkellyfam
 * @Date:   2022-03-28T19:55:49-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-04-19T21:38:30-04:00
 */



import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Lineage {
  // import the race array, raceID would match for the remaining of the data.
  raceID: number,
  lineageName: {
    parentLineage: string,
    subLineages?: string,
  },
  // Variant human allows the abilityName to be picked by player
  // if I were to make an abilities: Ability[]
  // maybe make a map called "offsetMap", key =
  abilityOne: Ability,
  // Variant Human and Half-Elf allows the abilityName to be picked by player
  abilityTwo:  Ability,
  // Variant Human and Half-Elf allows the abilityName to be picked by player
  abilityThree?: Ability,
  // remaining three scores only occur on "Human"
  abilityFour?: Ability,
  abilityFive?: Ability,
  abilitySix?: Ability,
  
  size: string,
  speed: number,
  darkvision?: number,
  languages: string[],
  resistance?: string[],
  skillProf?: string[],
  weaponProf?: string[],
  armorProf?: string[],
  toolProf?: string[],
  racialSpell?: string[],
  spellcastingAbility?: string[] // an ability score
  featureOne: Feature,
  featureTwo?: Feature,
  featureThree?: Feature,
  featureFour?: Feature,
  feat?: string, // link to new service for feats
  dragonborn?: {
    dragonColor: string,
    dragonDamage: string,
    dragonRange: string,
    dragonSave: string,
  },
};

export interface Feature {
  featureName: string,
  featureDesc: string,
};

export interface Ability {
  abilityName: string,
  scoreIncrease: number,
}

@Injectable({
  providedIn: 'root'
})
export class RacialFeaturesService {

  lineage$: Observable<Lineage>
  constructor() {

    // this is a sample racial data. To Be Continued
    this.lineage$ = of({
      raceID: 0,
      lineageName: {
        parentLineage: "dwarf",
        subLineage: "hill",
      },
      abilityOne: {
        abilityName: "constitution",
        scoreIncrease: 2,
      },
      abilityTwo: {
        abilityName: "wisdom",
        scoreIncrease: 1,
      },
      size: "medium",
      speed: 25,
      darkvision: 60,
      languages: ["common", "dwarvish"],
      resistance: ["poison"],
      weaponProf: ["battleaxe", "handaxe", "light hammer", "warhammer"],
      // how do I make this a choice?
      toolProf: ["smith's tools"],
      featureOne: {
        featureName: "Stonecunning",
        featureDesc: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus",
      },
      featureTwo: {
        featureName: "Dwarven Toughness",
        featureDesc: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
      }
    })
  }
}
