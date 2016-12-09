import { Component, OnInit } from '@angular/core';

import { Question} from './question';
import { Answer} from './answer';
import { QuestionCardComponent } from './question-card.component'; 
import { QuestionService } from './question.service'; 
import { AnswerService } from './answer.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService, AnswerService]
})
export class AppComponent implements OnInit {
  protected questions: Question[];

  constructor(private questionService: QuestionService, private answerService: AnswerService) {}

  ngOnInit(): void {
  	var that = this // we cannot use this in callback assignments

    this.questionService.getQuestions().then( (questions) => that.questions = questions )
    								   .then( () => that.answerService.getAnswers() )
    				   				   .then( (answers) => that.prefillQuestions(answers) );
  }

  prefillQuestions(answers): void {
  	function matchesAnswerId(answer) {
  		return question => (question._id == answer.questionId)
  	}

  	answers.forEach( answer => {
  		if (answer.value)
  	  		this.questions.find(matchesAnswerId(answer)).answer = answer.value
  	})
  }

  protected onSubmit() {
  	let changedAnswers = this.questions.filter( question => (question.answer) )
  									   .map( question => (new Answer(question._id, question.answer)))

  	this.answerService.storeAnswers(changedAnswers);				
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.questions); }
}
