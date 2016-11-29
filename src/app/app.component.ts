import { Component, OnInit } from '@angular/core';
import { Question} from './question';
import { QuestionCardComponent } from './question-card.component'; 
import { QuestionaireService } from './questionaire.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionaireService]
})
export class AppComponent implements OnInit {
  private isDarkTheme: boolean = false
  protected questions: Question[];

  constructor(private questionaireService: QuestionaireService) {}

  ngOnInit(): void {
  	this.getQuestions()
  }

  private getQuestions() {
    	this.questions = this.questionaireService.getQuestions();
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.questions); }
}
