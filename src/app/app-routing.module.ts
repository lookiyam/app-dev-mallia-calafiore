import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // <- here is the home page
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  // You might also want to improve this part for yourself; like having a folder with a subchild
  // especially for when we'll use the course data.
  {
    path: 'course-levels',
    loadChildren: () => import('./course-levels/course-levels.module').then( m => m.CourseLevelsPageModule)
  },
  {
    path: 'course-list',
    loadChildren: () => import('./course-list/course-list.module').then( m => m.CourseListPageModule)
  },
  {
    path: 'course-info',
    loadChildren: () => import('./course-info/course-info.module').then( m => m.CourseInfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
