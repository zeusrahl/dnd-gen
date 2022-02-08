/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-25T20:54:02-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T14:46:36-05:00
 */


import { Input } from '@angular/core';
import { CharClass, DnDCharacter, Race, StatBlock } from './character-builder.service';


 export class DndCharacterData implements DnDCharacter {

   /********************************************************************
    These are the fields of the class
    ********************************************************************/
   statBlock: StatBlock;

   race: Race; // add more races later

   charClass: CharClass; // add more classes

   results:number[] = new Array(4)

   /********************************************************************
   These are the life cycle hooks
   ********************************************************************/

   constructor(race: Race, charClass: CharClass) {
     this.race = race;
     this.charClass = charClass;
     this.statBlock = this.randomStats();
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
           // this.results = [];

           for (var i = 0; i<this.results.length;i++) {
             this.results[i] = Math.floor(1+Math.random()*6)
           };

           (<any>statBlock)[attribute] = this.results.reduce((a, b) => a + b, 0) - Math.min(...this.results)
           console.log(attribute, this.results);

           // (<any>statBlock)[attribute] = Math.floor(1+Math.random()*12)
         };
         console.log(statBlock, this.results);
         return statBlock
       }
     // randomStats(): StatBlock {
     //   const statBlock = {
     //     strength: 5,
     //     dexterity: 5,
     //     constitution: 5,
     //     wisdom: 5,
     //     intelligence: 5,
     //     charisma: 5
     //   }
     //
     //   // iterate through the fields
     //   // attribute is each of the abilities
     //   for (let attribute in statBlock) {
     //     (<any>statBlock)[attribute] = Math.floor(1+Math.random()*6)+Math.floor(1+Math.random()*6)+Math.floor(1+Math.random()*6)
     //   }
     //
     //   return statBlock
     // }

   }
