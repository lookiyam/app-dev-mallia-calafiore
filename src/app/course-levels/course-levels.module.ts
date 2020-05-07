import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseLevelsPageRoutingModule } from './course-levels-routing.module';

import { CourseLevelsPage } from './course-levels.page';
import { SharedComponentsModule } from '../modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    // imported ionic module in order to let angular read the ionic custom items
    // imported the shared component module to make the page read the created footer
    CommonModule,
    FormsModule,
    IonicModule,
    CourseLevelsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CourseLevelsPage]
})
export class CourseLevelsPageModule {}
