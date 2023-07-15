import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AcademicsComponent } from './academics/academics.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { CampusComponent } from './campus/campus.component';
import { ParentsComponent } from './parents/parents.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AlumniComponent } from './alumni/alumni.component';



@NgModule({
  declarations: [
    HomeComponent,
    AcademicsComponent,
    AdmissionsComponent,
    CampusComponent,
    ParentsComponent,
    ContactsComponent,
    AlumniComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AnonymousModule { }
