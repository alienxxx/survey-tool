import { Component, OnInit } from '@angular/core';

import { DepartmentService } from './department.service'; 

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {
  private buttonLabel: string
  private departmentList: {_id:string, name:string}[]

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
	  this.departmentService.getDepartments().then( departments => this.departmentList = departments )
                                           .then( () => this.departmentService.departmentId$.next(this.departmentList[0]._id) )
                                           .then( () => this.setButtonLabel(this.departmentList[0].name) )
                                           .catch( () =>  0 ) //departmentList.length == 0
  }

  setButtonLabel(label) {
    this.buttonLabel = label
  }

  switchDepartment(departmentId) {
    this.departmentService.switchDepartment(departmentId)
  }
}
