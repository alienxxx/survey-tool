import { Component, OnInit } from '@angular/core';

import { Department, Answer, Question } from '../model';
import { DepartmentService } from '../department.service'; 

@Component({
 // selector: 'app-root',
  templateUrl: './admin.component.html',
 // styleUrls: ['./app.component.css'],
 // providers: [DepartmentService]
})
export class AdminComponent implements OnInit {
  protected questions: Question[]
  protected departmentsList: any[]

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
//	  this.departmentService.getDepartments().then( (departments) => this.departmentsList = departments )
//										                       .then( () => { if(this.departmentsList[0]) this.setDepartment(this.departmentsList[0]._id) })
  }

  protected onSubmit() {
  	//this.departmentService.storeAnswers(this.department._id, this.extractAnswersFromQuestions());				
  }
}
