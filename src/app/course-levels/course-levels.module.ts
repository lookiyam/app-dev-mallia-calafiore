import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseLevelsPageRoutingModule } from './course-levels-routing.module';

import { CourseLevelsPage } from './course-levels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseLevelsPageRoutingModule
  ],
  declarations: [CourseLevelsPage]
})
export class CourseLevelsPageModule {}
