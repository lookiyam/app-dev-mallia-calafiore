import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseInfoPageRoutingModule } from './course-info-routing.module';

import { CourseInfoPage } from './course-info.page';
import { SharedComponentsModule } from '../modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseInfoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CourseInfoPage]
})
export class CourseInfoPageModule {}
