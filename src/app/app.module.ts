/**
 * @Author: dotsonkellyfam
 * @Date:   2021-10-04T20:25:06-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-02-06T21:49:28-05:00
 */



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DndTableModule } from './dnd-table/dnd-table.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DndTableModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
