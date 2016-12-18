import { Component } from '@angular/core';

import { Department, Answer, Question } from './model';
import { ToolbarComponent } from './toolbar.component'; 
import { QuestionaireComponent } from './questionaire.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected department: string
  protected departmentList: any[]
}
