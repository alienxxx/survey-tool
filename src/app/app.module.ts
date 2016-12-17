import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar.component';
import { QuestionaireComponent } from './questionaire.component';
import { QuestionCardComponent } from './question-card.component';
import { DepartmentService } from './department.service';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'  },
  { path: '', component: QuestionaireComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    QuestionaireComponent,
    QuestionCardComponent,
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
