import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseLevelsPage } from './course-levels.page';

const routes: Routes = [
  {
    path: '',
    component: CourseLevelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseLevelsPageRoutingModule {}
