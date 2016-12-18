import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Department, Answer, Question } from './model';
import { QuestionCardComponent } from './question-card.component'; 
import { DepartmentService } from './department.service'; 

@Component({
  templateUrl: './questionaire.component.html',
})
export class QuestionaireComponent implements OnInit, OnDestroy {
  protected department: Department = new Department()
  protected questions: Question[]
  private subscription: Subscription

  constructor(private departmentService: DepartmentService) {
    this.subscription = this.departmentService.departmentId$.subscribe( (departmentId) => this.setDepartment(departmentId) )
  }

  ngOnInit(): void {
    if(this.departmentService.departmentId) this.setDepartment(this.departmentService.departmentId)
  }

  setDepartment(departmentId): void {
    let departmentPromise = this.departmentService.getDepartment(departmentId).then( (department) => this.department = department )
    let questionsPromise = this.departmentService.getQuestions(departmentId).then( (questions) => this.questions = questions )
    Promise.all([departmentPromise, questionsPromise]).then( () => this.attachAnswersToQuestions() )
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
    this.subscription.unsubscribe();
  }  

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.questions) + JSON.stringify(this.departmentsList); }
}
