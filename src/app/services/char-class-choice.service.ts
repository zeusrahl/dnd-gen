/**
 * @Author: dotsonkellyfam
 * @Date:   2022-05-02T14:15:09-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-05-08T14:01:03-04:00
 */



import { Injectable } from '@angular/core';
import { DnDCharacter, StatBlock } from '../dnd-table/character-builder.service';

/**
  1) call the stats array
  2) compare the stats array
    2a) if strength is best skill
      2a.1) if dex --> Fighter
      2a.2) if con --> Barb
      2a.3) if wis --> Fighter
      2a.4) if int --> Fighter
      2a.5) if cha --> Paladin
    2b) if dexterity is best skill
      2b.1) if str --> Fighter
      2b.2) if con --> Fighter
      2b.3) if wis --> Monk
      2b.4) if int --> Rogue
      2b.5) if cha --> Bard
    2c) if constitution is best skill
      2c.1) if str --> Barb
      2c.2) if dex --> Fighter
      2c.3) if wis --> Cleric
      2c.4) if int --> Wizard
      2c.5) if cha --> Warlock
    2d) if wisdom is best skill
      2d.1) if str --> Druid
      2d.2) if dex --> Monk
      2d.3) if con --> Cleric
      2d.4) if int --> Wizard
      2d.5) if cha --> Cleric/Monk
    2e) if intelligence is best skill
      2e.1) if str --> wizard
      2e.2) if dex --> wizard
      2e.3) if con --> wizard
      2e.4) if wis --> wizard
      2e.5) if cha --> wizard
    2f) if charisma is best skill
      2f.1) if str --> bard
      2f.2) if dex --> bard
      2f.3) if con --> sorcerer
      2f.4) if wis --> warlock
      2f.5) if int --> warlock
*/

@Injectable({
  providedIn: 'root'
})


export class CharClassChoiceService {
  character: DnDCharacter[] = [];
  // statBlock: StatBlock[] = [this.character.statBlock]

  constructor() { }



}
