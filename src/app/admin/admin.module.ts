import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent }
];

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [AdminComponent],
  providers: [],
})
export class AdminModule { }
