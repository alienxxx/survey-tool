import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AdminComponent } from './admin.component';
import { QuestionListComponent } from './question-list.component';
import { QuestionComponent } from './question.component';

import { RouterModule, Routes } from '@angular/router';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent }
];

@NgModule({
  declarations: [
    AdminComponent,
    QuestionListComponent,
    QuestionComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    FormsModule,
    CommonModule,
    HttpModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [AdminComponent],
  providers: [],
})
export class AdminModule { }
