/**
 * @Author: dotsonkellyfam
 * @Date:   2022-05-16T20:09:02-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-06-11T22:13:43-04:00
 */



import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CharacterBuilderService, CharClass, DnDCharacter, Skill } from '../character-builder.service';

@Component({
  selector: 'app-dnd-skills',
  templateUrl: './dnd-skills.component.html',
  styleUrls: ['./dnd-skills.component.scss']
})


export class DndSkillsComponent implements OnInit {

  @Input() dndCharacterData!: DnDCharacter;

  skills: Skill[] = ["acrobatics", "animal handling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "performance", "persuasion", "religion", "sleight of hand", "stealth", "survival"]

  CHAR_CLASS_SKILLS:any = {
    barbarian: {
      selectChoice: 2,
      skills: ["animal handling", "athletics", "intimidation", "nature", "perception", "survival"]
    },
    bard: {
      selectChoice: 3,
      skills: ["acrobatics", "animal handling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "performance", "persuasion", "religion", "sleight of hand", "stealth", "survival"]
    },
    cleric: {
      selectChoice: 2,
      skills: ["history", "insight", "medicine", "persuasion", "religion"]
    },
    druid: {
      selectChoice: 2,
      skills: ["arcana", "animal handling", "insight", "medicine", "nature", "perception", "religion", "survival"]
    },
    fighter: {
      selectChoice: 2,
      skills: ["acrobatics", "animal handling", "athletics", "history", "insight", "intimidation", "perception", "survival"]
    },
    monk: {
      selectChoice: 2,
      skills: ["acrobatics", "athletics", "history", "insight", "religion", "stealth"]
    },
    paladin: {
      selectChoice: 2,
      skills: ["athletics", "insight", "intimidation", "medicine", "persuasion", "religion"]
    },
    ranger: {
      selectChoice: 3,
      skills: ["animal handling", "athletics", "insight", "investigation", "nature", "perceptions", "stealth", "survival"]
    },
    rogue: {
      selectChoice: 4,
      skills: ["acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleight of hand", "stealth"]
    },
    sorcerer: {
      selectChoice: 2,
      skills: ["arcana", "deception", "insight", "intimidation", "persuasion", "religion"]
    },
    warlock: {
      selectChoice: 2,
      skills: ["arcana", "deception", "history", "intimidation", "investigation", "nature", "religion"]
    },
    wizard: {
      selectChoice: 2,
      skills: ["arcana", "history", "insight", "investigation", "medicine", "religion"]
    }
  }
  checked: boolean | undefined;

  skillChoice: FormGroup

  skillSelection!: Skill[]

  constructor(private fb: FormBuilder) {
    this.skillChoice = this.fb.group({
      acrobatics: new FormControl(false),
      "animal handling": new FormControl(false),
      arcana: new FormControl(false),
      athletics: new FormControl(false),
      deception: new FormControl(false),
      history: new FormControl(false),
      insight: new FormControl(false),
      intimidation: new FormControl(false),
      investigation: new FormControl(false),
      medicine: new FormControl(false),
      nature: new FormControl(false),
      perception: new FormControl(false),
      performance: new FormControl(false),
      persuasion: new FormControl(false),
      religion: new FormControl(false),
      "sleight of hand": new FormControl(false),
      stealth: new FormControl(false),
      survival: new FormControl(false),
      random: new FormControl(false),
    })
  }

  /**
    step 1: only keep the first "selectChoice" selections
      step 1.5: only allow choices from the charClass list
        this.skillChoice[skill].disable()/.enable()
    step 2: create a new checkbox = random => another checkbox is picked, and random is unchecked
    step 3: only keep the two most recently selected values


    my own addition:
  */

  ngOnInit(): void {

    this.assignSkills(this.dndCharacterData.charClass)
    // for (let skill in this.skills) {
    //   if (!(this.dndCharacterData.skills[skill])) {
    //     this.skillChoice.controls[skill].disable()
    //   }
    // }
    this.skillSelection=this.dndCharacterData.skills
    this.skillChoice.valueChanges.subscribe(val => {
      let counter = 0
      const charClass = this.dndCharacterData.charClass
      for (let skill in val ) {
        // create a counter to count the number of trues
        if (val[skill]) {
          counter++
        }
      }

      if (counter > this.CHAR_CLASS_SKILLS[charClass].selectChoice) {
        console.log('You have too many selected skills.')


        let deleteSkill = this.skillSelection.slice(0,1)
        this.skillSelection = this.skillSelection.slice(1)
        console.log('deleteSkill: ' + deleteSkill)
        console.log("newSelection: " + this.skillSelection)

        this.dndCharacterData.skills = this.skillSelection
        this.skillChoice.controls[deleteSkill[0]].setValue(false, {emitEvent: false})


        // const skillMap = new Array()
        // for (let skill in val) {
        //   if (val[skill]) {
        //     skillMap.push(skill)
        //   }
        // }
        // console.log('skill map: ' + skillMap)
        // const lastSkill = skillMap.slice(-1)
        // const newSkills = skillMap.slice(0,this.CHAR_CLASS_SKILLS[charClass].selectChoice)
        //
        // this.dndCharacterData.skills = newSkills
        // this.skillChoice.controls[lastSkill[0]].setValue(false, {emitEvent: false})
        // console.log(lastSkill)
        // console.log(newSkills)
      }
      // console.log(val)
      // console.log(counter)
    })

    // this.skillChoice.get()?.valueChanges.subscribe(selectedValue => {
    //
    // })
  }


  //   assignSkills(charClass: CharClass = this.cbs.characters[0].charClass) {
  assignSkills(charClass: CharClass) {
    const select:number = this.CHAR_CLASS_SKILLS[charClass].selectChoice
    const skillArray:Skill[] = this.CHAR_CLASS_SKILLS[charClass].skills
    const chosenSkills:Skill[] = this.getMultipleRandom(skillArray, select)
    this.dndCharacterData.skills = chosenSkills
    // console.log(this.dndCharacterData.skills)
    for (let skill of this.skills) {
      if (this.dndCharacterData.skills.includes(skill)) {
        this.skillChoice.controls[skill].setValue(true)
      } else {
        this.skillChoice.controls[skill].setValue(false)
      }
    }
  }

  getMultipleRandom(arr: any[], num: number) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled .slice(0, num);
  }

  enableSkill(skill: string):boolean {
    const charClass = this.dndCharacterData.charClass
    const assignableSkill = this.CHAR_CLASS_SKILLS[charClass].skills
    if (assignableSkill.includes(skill)) {
      return false
    }
    else {
      return true
    }
  }

  // getSkillSelection() {
  //   return this.skillChoice.controls['skillSelection'] as FormArray
  // }

  onChange(skill: Skill) {
    this.skillSelection.push(skill)
    // console.log("test: " + this.skillSelection)
  }

  chooseRandomStat() {
    const charClass = this.dndCharacterData.charClass
    const skillArray = this.CHAR_CLASS_SKILLS[charClass].skills

    let uncheckedSkills = [...skillArray]
    for (let skill of this.skills) {
      if (this.dndCharacterData.skills.includes(skill)) {
        uncheckedSkills.splice(uncheckedSkills.indexOf(skill),1)
      }
    }
    let randomSkill = this.getMultipleRandom(uncheckedSkills,1)
    console.log("randomSkill: " + randomSkill)
    const chosenSkill = randomSkill[0]
    this.skillChoice.controls[chosenSkill].setValue(true)
    this.skillSelection.push(chosenSkill)
    console.log("uncheckedSkills: " + uncheckedSkills)
    return false
  }

}
