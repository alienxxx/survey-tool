import { Component, OnInit } from '@angular/core';

import { DepartmentService } from './department.service'; 

@Component({
  selector: 'toolbar',
  styleUrls: ['./toolbar.component.css'],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {
  private buttonLabel: string
  private departmentList: any[]

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
	  this.departmentService.getDepartments().then( departments => this.departmentList = departments )

    //TODO: Adapt initial buttonLabel value to called route
    this.setButtonLabel('Select')
  }

  public setButtonLabel(label) {
    this.buttonLabel = label
  }

  public switchDepartment(departmentId) {
    this.departmentService.switchDepartment(departmentId)
  }
}
