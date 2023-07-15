import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcademicsComponent } from './academics/academics.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { AlumniComponent } from './alumni/alumni.component';
import { CampusComponent } from './campus/campus.component';
import { ParentsComponent } from './parents/parents.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'academics',
    component: AcademicsComponent
  },
  {
    path: 'admissions',
    component: AdmissionsComponent
  },
  {
    path: 'alumni',
    component: AlumniComponent
  },
  {
    path: 'campus',
    component: CampusComponent
  },
  {
    path: 'parents',
    component: ParentsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnonymousRoutingModule { }
