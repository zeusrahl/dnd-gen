/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-11T20:39:06-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T21:47:19-05:00
 */



import { Component, OnInit } from '@angular/core';
import { CharacterBuilderService } from '../character-builder.service';

@Component({
  selector: 'app-dnd-table',
  templateUrl: './dnd-table.component.html',
  styleUrls: ['./dnd-table.component.scss']
})
export class DndTableComponent implements OnInit {



// adding the modifier "private" both declares, injects, and assigns an
// instance of cbs.
  constructor(private cbs: CharacterBuilderService) {

  }

  ngOnInit(): void {
    this.cbs.loadCharacters()
  }

  // method
  get allCharacters() {
    return this.cbs.characters
  }

}
