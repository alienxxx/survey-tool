import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Question} from './question';

@Injectable()
export class QuestionService {
  	private questionsUrl = 'http://localhost:3000/questions';  // URL to web api

	constructor(private http: Http) {}

	getQuestions(): Promise<Question[]> {

	    return this.http.get(this.questionsUrl)
	               .toPromise()
	               .then(response => response.json() as Question[] )
	               .catch(this.handleError);

		//return Promise.resolve(Question.fromJSONArray(QUESTIONS))
	}

	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
 	}
}