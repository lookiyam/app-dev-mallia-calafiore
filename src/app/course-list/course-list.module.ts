import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseListPageRoutingModule } from './course-list-routing.module';

import { CourseListPage } from './course-list.page';
import { SharedComponentsModule } from '../modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    // imported ionic module in order to let angular read the ionic custom items
    // imported the shared component module to make the page read the created footer
    CommonModule,
    FormsModule,
    IonicModule,
    CourseListPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CourseListPage]
})
export class CourseListPageModule {}
