/**
 * @Author: dotsonkellyfam
 * @Date:   2022-02-08T20:36:40-05:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-15T20:59:21-05:00
 */



import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DnDCharacter } from '../dnd-table/character-builder.service';
import { Dwarf } from '../dnd-table/race/dwarf/dwarf';

export interface User {
  userName : string,
  profiles : {
    [profileID:string] : Profile
  }
}

export interface Profile {
  dnDCharacter : DnDCharacter,
  notes : string[],
  description : string,
  lastOpened ?: number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$ : Observable<User>
  constructor() {

    // this is a dummy user to use for the code until a service can be created
    this.user$ = of({ // 'of' is a placeholder. Make an observable from this.
      userName : "Ethan",
      profiles: {
        myFirstGame: {
          dnDCharacter: new Dwarf("ranger"),
          notes: [],
          description: "My first awesome Character, Thrandem"
        }
      }
    })
  }
}
