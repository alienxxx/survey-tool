import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Question } from '../model';

@Injectable()
export class QuestionService {
  	private readonly webServiceUrl = 'http://localhost:3000/questions/';  // URL to web api
  	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) {}

	getQuestions(): Promise<Question[]> {
		let webServiceUrl = this.webServiceUrl

	    return this.http.get(webServiceUrl)
	               .toPromise()
	               .then(response => response.json() as Question[] )
	               .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
 	}
}