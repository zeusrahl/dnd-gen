import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    ProfileViewComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserProfilesModule { }
