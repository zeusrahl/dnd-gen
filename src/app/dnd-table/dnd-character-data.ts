/**
* @Author: dotsonkellyfam
* @Date:   2021-10-25T20:54:02-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-07-12T14:49:53-04:00
*/


import { Input } from '@angular/core';
import { Ability, CharClass, DnDCharacter, ProBonus, Race, Skill, StatBlock, StatMod, SubRace } from './character-builder.service';


export class DndCharacterData implements DnDCharacter {
  static maxStat() {
    throw new Error('Method not implemented.');
  }

  /********************************************************************
  These are the fields of the class
  ********************************************************************/
  statBlock: StatBlock;

  statMod?: StatMod;

  proficiencyBonus: ProBonus = 2;

  skills: Skill[] = [];

  charClass: CharClass = "none";

  results:number[] = new Array(4)

  statArray:number[] = new Array(6)

  RACE_CHOICE:any = {
    dragonborn: {
      abilityOne: {
        name: 'strength',
        modify: 2
      },
      abilityTwo: {
        name: 'charisma',
        modify: 1
      }
    },
    dwarf: {
      abilityOne: {
        name: 'constitution',
        modify: 2
      }
    },
    elf: {
      abilityOne: {
        name: 'dexterity',
        modify: 2
      }
    },
    gnome: {
      abilityOne: {
        name: 'intelligence',
        modify: 2
      },
      abilityTwo: {
        name: 'constitution',
        modify: 1
      }
    },
    'half-elf': {
      abilityOne: {
        name: 'charisma',
        modify: 2
      }
    },
    'half-orc': {
      abilityOne: {
        name: 'strength',
        modify: 2
      },
      abilityTwo: {
        name: 'constitution',
        modify: 1
      }
    },
    halfling: {
      abilityOne: {
        name: 'dexterity',
        modify: 2
      }
    },
    tiefling: {
      abilityOne: {
        name: 'charisma',
        modify: 2
      },
      abilityTwo: {
        name: 'intelligence',
        modify: 1
      }
    }
  }

  SUBRACE_CHOICE:any = {
    hill: {
      abilityTwo: {
        name: '',
        modify: 1
      }
    },
    mountain:  {
      abilityTwo: {
        name: '',
        modify: 1
      }
    },
    high:  {
      abilityTwo: {
        name: '',
        modify: 1
      }
    },
    eladrin:  {
      abilityTwo: {
        name: '',
        modify: 1
      }
    },
    lightfoot:  {
      abilityTwo: {
        name: '',
        modify: 1
      }
    },
    stout: {
      abilityTwo: {
        name: '',
        modify: 1
      }
    },
    'non-variant': {
      abilityOne: {
        name: 'strength',
        modify: 1
      },
      abilityTwo: {
        name: 'dexterity',
        modify: 1
      },
      abilityThree: {
        name: 'constitution',
        modify: 1
      },
      abilityFour: {
        name: 'wisdom',
        modify: 1
      },
      abilityFive: {
        name: 'intelligence',
        modify: 1
      },
      abilitySix: {
        name: 'charisma',
        modify: 1
      }
    }
  }

  ALL_CHOICES:any = {
    'strength,dexterity':'fighter',
    'strength,constitution':'barbarian',
    'strength,wisdom':'fighter',
    'strength,intelligence':'fighter',
    'strength,charisma':'paladin',
    'dexterity,strength':'fighter',
    'dexterity,constitution':'fighter',
    'dexterity,wisdom':'monk',
    'dexterity,intelligence':'rogue',
    'dexterity,charisma':'bard',
    'constitution,strength':'barbarian',
    'constitution,dexterity':'fighter',
    'constitution,wisdom':'cleric',
    'constitution,intelligence':'wizard',
    'constitution,charisma':'warlock',
    'wisdom,strength':'druid',
    'wisdom,dexterity':'monk',
    'wisdom,constitution':'cleric',
    'wisdom,intelligence':'wizard',
    'wisdom,charisma':'cleric',
    'intelligence,strength':'wizard',
    'intelligence,dexterity':'wizard',
    'intelligence,constitution':'wizard',
    'intelligence,wisdom':'wizard',
    'intelligence,charisma':'wizard',
    'charisma,strength':'paladin',
    'charisma,dexterity':'bard',
    'charisma,constitution':'sorcerer',
    'charisma,wisdom':'warlock',
    'charisma,intelligence':'warlock'
  }

  /********************************************************************
  These are the life cycle hooks
  ********************************************************************/

  constructor(public race: Race, public subRace: SubRace) {
    this.statBlock = this.randomStats()
    this.generateStatBlock()
    this.charClass = this.maxStat()
  }

  newStats() {
    this.statBlock = this.randomStats()
    this.generateStatBlock()
    this.charClass = this.maxStat()
  }

  ngOnChange() {
    this.generateStatBlock()
    this.charClass = this.maxStat()
  }

  /********************************************************************
  These are accessors
  ********************************************************************/
  // set accessors (accessory function)

  /********************************************************************
  These are the private methods
  ********************************************************************/

  /********************************************************************
  These are the public methods
  ********************************************************************/
  // normally, this would be inside of a service, because this is heavy in logic, and is static. Doesn't do much to the front end of the program.

  randomStats(): StatBlock {
    const statBlock = {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      wisdom: 10,
      intelligence: 10,
      charisma: 10
    }

    for (let attribute in statBlock) {

      for (var i = 0; i<this.results.length;i++) {
        this.results[i] = Math.floor(2+Math.random()*5)
      };

      (<any>statBlock)[attribute] = this.results.reduce((a, b) => a + b, 0) - Math.min(...this.results)
      console.log(attribute, this.results);

    };
    console.log(statBlock);
    console.log("This is a check: " + statBlock)
    return statBlock
  }

  // calculateStatMods(statBlock: StatBlock) {
  //   for (let stat in statBlock) {
  //     const statScore: number = statBlock[stat]
  //     const statMod = Math.floor(statBlock[stat]/2 - 5)
  //   }
  // }

  generateStatBlock() {
    if (this.race) {
      if (this.race == 'dragonborn') {
        this.statBlock.strength += 2
        this.statBlock.charisma += 1
      }
      else if (this.race == 'dwarf') {
        this.statBlock.constitution += 2
        if (this.subRace == 'hill') {
          this.statBlock.wisdom += 1
        } else if (this.subRace = 'mountain') {
          this.statBlock.strength += 2
        }
      }
      else if (this.race == 'elf') {
        this.statBlock.dexterity += 2
        if (this.subRace == 'high' || this.subRace == 'eladrin') {
          this.statBlock.intelligence += 1
        } else if (this.subRace = 'wood') {
          this.statBlock.wisdom += 1
        }
      }
      else if (this.race == 'gnome') {
        this.statBlock.intelligence += 2
        this.statBlock.constitution += 1
      }
      else if (this.race == 'half-elf') {
        this.statBlock.charisma += 2
      }
      else if (this.race == 'half-orc') {
        this.statBlock.strength += 2
        this.statBlock.constitution += 1
      }
      else if (this.race == 'halfling') {
        this.statBlock.dexterity += 2
        if (this.subRace == 'lightfoot') {
          this.statBlock.charisma += 1
        } else if (this.subRace = 'stout') {
          this.statBlock.constitution += 1
        }
      }
      else if (this.race == 'human') {
      if (this.subRace == 'non-variant') {
        this.statBlock.strength += 1
        this.statBlock.dexterity += 1
        this.statBlock.constitution += 1
        this.statBlock.wisdom += 1
        this.statBlock.intelligence += 1
        this.statBlock.charisma += 1
      }
      } else if (this.race == 'tiefling') {
        this.statBlock.charisma += 2
        this.statBlock.intelligence += 1
      }
    }
  }

  chosenAbilities:Ability[] = new Array(2)

  // this code is sprecifically for Half-Elves
  modifyStatOne(ability: Ability) {
    if (ability == "charisma" || ability == this.chosenAbilities[1]) {
      console.error("Cannot pick this score as secondary score improvement");
      throw new Error("Cannot pick this score as secondary score improvement")
    }
    this.statBlock[ability] += 1;
    this.chosenAbilities[0]=ability;
  }

  // this code is sprecifically for Half-Elves
    modifyStatTwo(ability: Ability) {
    if (ability == "charisma" || ability == this.chosenAbilities[0]) {
      console.error("Cannot pick charisma as secondary score improvement");
      throw new Error("Cannot pick charisma as secondary score improvement")
    }
    this.statBlock[ability] += 1;
    this.chosenAbilities[1]=ability;
  }

  // This code is specifically for Variant Humans
  humanStatOne(ability: Ability) {
    if (ability == this.chosenAbilities[1]) {
      throw new Error("This ability score has already been chosen")
    }
    this.statBlock[ability] += 1;
    this.chosenAbilities[0]=ability;
  }

  humanStatTwo(ability: Ability) {
    if (ability == this.chosenAbilities[0]) {
      throw new Error("This ability score has already been chosen")
    }
    this.statBlock[ability] += 1;
    this.chosenAbilities[1]=ability;
  }

  maxStat() {
    const top = Object.entries(this.statBlock).sort((a,b) =>
      a[1] >= b[1] ? 1 :
      a[1] <= b[1] ? -1:
      0).slice(-2);
    console.log(top)
    console.log("maxStat: " + top[1])
    const charClassRec = this.ALL_CHOICES[`${top[1][0]},${top[0][0]}`]
    console.log(charClassRec)
    return charClassRec
  }
}
