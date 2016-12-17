import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Department, Answer, Question } from './model';
import { QuestionCardComponent } from './question-card.component'; 
import { DepartmentService } from './department.service'; 

@Component({
  templateUrl: './questionaire.component.html',
})
export class QuestionaireComponent {
  protected department: Department = new Department()
  protected questions: Question[]
  private subscription: Subscription
  private departmentService: DepartmentService

  constructor(ds: DepartmentService) {
    this.departmentService = ds
    this.subscription = this.departmentService.departmentId$.subscribe( this.setDepartment )
    //this.setDepartment('584dbc85ac16ab05fb981774') 
  }

  setDepartment(departmentId): void {
    /*let departmentPromise = this.departmentService.getDepartment(departmentId).then( (department) => this.department = department )
    let questionsPromise = this.departmentService.getQuestions(departmentId).then( (questions) => this.questions = questions )
    Promise.all([departmentPromise, questionsPromise]).then( () => this.attachAnswersToQuestions() )*/
  }

  attachAnswersToQuestions(): void {
    this.questions.forEach( (question) => {
      let matchingAnswer = this.department.answers.find(matches(question))

      if(matchingAnswer) question.answer = matchingAnswer.value
    })

    function matches(question) {
      return answer => (question._id == answer.questionId)
    }
  }

  extractAnswersFromQuestions(): Answer[] {
    // TODO: track if answer has changed 
    return this.questions.filter( question => (question.answer) )
                         .map( question => (new Answer(question._id, question.answer)))  
  }

  protected onSubmit() {
  	this.departmentService.storeAnswers(this.department._id, this.extractAnswersFromQuestions());				
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.departmentService.departmentId$.unsubscribe();
  }  

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.questions) + JSON.stringify(this.departmentsList); }
}
