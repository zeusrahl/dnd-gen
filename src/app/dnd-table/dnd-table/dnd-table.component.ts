/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-11T20:39:06-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-07-12T15:38:07-04:00
 */



import { Component, Input, OnInit } from '@angular/core';
// import { RaceModComponent } from '../race/race-mod/race-mod.component';
import { CharacterBuilderService, Race, SubRace  } from '../character-builder.service';
import { FormControl, Validators } from '@angular/forms'
import { DndCharacterData } from '../dnd-character-data';

@Component({
  selector: 'app-dnd-table',
  templateUrl: './dnd-table.component.html',
  styleUrls: ['./dnd-table.component.scss']
})
export class DndTableComponent implements OnInit {

  raceControl = new FormControl('')

  subRaceControl = new FormControl('')

  raceChoice: string[] = ["dragonborn", "dwarf", "elf", "gnome", "half-elf", "half-orc", "halfling", "human", "tiefling"]

  characterSelected: number = 0 // unused?

  @Input() hasSubRace: boolean = true

  // @Input() dndCharacterData!: DnDCharacter

  RACE_LIST:any = {
    dwarf: {
      subRace: ["hill", "mountain"]
    },
    elf: {
      subRace: ["high", "eladrin", "wood"]
    },
    gnome: {
      subRace: ["rock"]
    },
    halfling: {
      subRace: ["lightfoot", "stout"]
    },
    human: {
      subRace: ["non-variant", "variant"]
    }
  }

// adding the modifier "private" both declares, injects, and assigns an instance of cbs.
  constructor(
    private cbs: CharacterBuilderService,
  ) {

  }

  ngOnInit(): void {
    this.cbs.loadCharacters()
    this.raceControl.setValue(this.cbs.characters[0].race)
    this.subRaceControl.setValue(this.cbs.characters[0].subRace)
  }

  // method
  generateStatBlock() {
    const char = this.cbs.characters[0]
  }

  // add method for "hasSubClass" for <div>
  selectRace(race: Race) {
    let pickSubRace
    console.log("selectRace Check: " + race)
    this.cbs.characters[0].race = race
    if (race == 'gnome') {
      this.cbs.characters[0].subRace = 'rock'
    } else if (
      race == 'dwarf' ||
      race == 'elf' ||
      race == 'halfling' ||
      race == 'human') {
        pickSubRace = `${race}SubRace`
        console.log("selectRace Check 2: " + pickSubRace)
        this.hasSubRace = true

    } else {
      this.cbs.characters[0].subRace = 'none'
      console.log("selectRace check 3: Empty")
      this.hasSubRace = false
    }
    return this.cbs.characters
  }

  selectSubRace(subRace: SubRace) {
    this.cbs.characters[0].subRace = subRace

  }

  get allCharacters() {
    return this.cbs.characters
  }

  // public onRaceChange(event) {
  //   const value = event.target.value;
  //   this.raceSelected=value
  //   return this.raceSelected
  // }

  // loadRace(race: Race) {
  //
  // }

}
