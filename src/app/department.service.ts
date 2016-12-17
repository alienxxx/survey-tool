import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

import { Department, Question, Answer } from './model';

@Injectable()
export class DepartmentService {
  	private readonly webServiceUrl = 'http://localhost:3000/departments/';  // URL to web api
  	private headers = new Headers({'Content-Type': 'application/json'});
  	public departmentId$: Subject<string> = new Subject<string>();
  	public departmentId: string

	constructor(private http: Http) {}

	getDepartments(): Promise<any[]> {
	    return this.http.get(this.webServiceUrl)
	               .toPromise()
	               .then(response => response.json())
	               .catch(this.handleError);
	}

	getDepartment(departmentId): Promise<Department> {
		let webServiceUrl = this.webServiceUrl + departmentId

	    return this.http.get(webServiceUrl)
	               .toPromise()
	               .then(response => response.json() )
	               .catch(this.handleError);
	}

	getQuestions(departmentId): Promise<Question[]> {
		let webServiceUrl = this.webServiceUrl + departmentId + '/questions'

	    return this.http.get(webServiceUrl)
	               .toPromise()
	               .then(response => response.json() as Question[] )
	               .catch(this.handleError);
	}

	getAnswers(departmentId): Promise<Answer[]> {
		let webServiceUrl = this.webServiceUrl + departmentId + '/answers'

	    return this.http.get(webServiceUrl)
	               .toPromise()
	               .then(response => response.json() as Answer[] )
	               .catch(this.handleError);
	}

	storeAnswers(departmentId: number, answers: Answer[]): Promise<any> {
		let webServiceUrl = this.webServiceUrl + departmentId + '/answers'

		return this.http.put(webServiceUrl, JSON.stringify(answers), {headers: this.headers})
					.toPromise()
					.then(() => answers)
					.catch(this.handleError)
	}

	switchDepartment(departmentId) {
		this.departmentId = departmentId
		this.departmentId$.next(departmentId)
	}

	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
 	}
}