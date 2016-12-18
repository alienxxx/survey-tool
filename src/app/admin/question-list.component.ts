import { Component, OnInit } from '@angular/core';

import { Question } from '../model';
import { QuestionService } from './question.service'; 

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  providers: [QuestionService]
})
export class QuestionListComponent implements OnInit {
  protected questions: Question[] = []

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
	  this.questionService.getQuestions().then( (questions) => this.questions = questions )										                      
  }

  protected onSubmit() {
  	//this.departmentService.storeAnswers(this.department._id, this.extractAnswersFromQuestions());				
  }
}
