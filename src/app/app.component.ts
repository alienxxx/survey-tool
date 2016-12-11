import { Component, OnInit } from '@angular/core';

import { Department, Answer, Question } from './model';
import { QuestionCardComponent } from './question-card.component'; 
import { DepartmentService } from './department.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DepartmentService]
})
export class AppComponent implements OnInit {
  protected department: Department
  protected questions: Question[]
  protected departmentsList: any[]

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.department = new Department() //init with empty Department

	  this.departmentService.getDepartments().then( (departments) => this.departmentsList = departments )
										                       .then( () => { if(this.departmentsList[0]) this.setDepartment(this.departmentsList[0]._id) })
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

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.questions) + JSON.stringify(this.departmentsList); }
}
