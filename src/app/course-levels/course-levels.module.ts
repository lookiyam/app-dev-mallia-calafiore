import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseLevelsPageRoutingModule } from './course-levels-routing.module';

import { CourseLevelsPage } from './course-levels.page';
import { SharedComponentsModule } from '../modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseLevelsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CourseLevelsPage]
})
export class CourseLevelsPageModule {}
