import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDataComponent } from './registration/list-data/list-data.component';
import { StudentComponent } from './registration/student/student.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/student-registration',
    pathMatch: 'full'
  },
  {
    path: 'student-registration',
    component: StudentComponent
  },
  {
    path: 'list-students',
    component: ListDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
