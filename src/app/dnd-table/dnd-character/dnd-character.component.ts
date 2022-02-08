import { DndTableComponent } from '../dnd-table/dnd-table.component';
/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-11T20:25:58-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T22:33:15-05:00
 */



import { Component, Input, OnInit } from '@angular/core';
import { CharClass, DnDCharacter, Race, StatBlock } from '../character-builder.service';

@Component({
  selector: 'app-dnd-character',
  templateUrl: './dnd-character.component.html',
  styleUrls: ['./dnd-character.component.scss']
})
export class DndCharacterComponent implements OnInit {

  /********************************************************************
    These are the fields of the class
    ********************************************************************/
   @Input() dndCharacterData?: DnDCharacter
  /********************************************************************
    These are the life cycle hooks
    ********************************************************************/

  constructor() {
  }

  ngOnInit(): void {
  }

  /********************************************************************
    These are accessors
    ********************************************************************/

  /********************************************************************
    These are the private methods
    ********************************************************************/

  /********************************************************************
    These are the public methods
    ********************************************************************/


  }
