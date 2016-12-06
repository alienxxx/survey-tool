import { Component, OnInit } from '@angular/core';

import { Question} from './question';
import { QuestionCardComponent } from './question-card.component'; 
import { QuestionService } from './question.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent implements OnInit {
  private isDarkTheme: boolean = false
  protected questions: Question[];

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService.getQuestions().then( questions => this.questions = questions );
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.questions); }
}
