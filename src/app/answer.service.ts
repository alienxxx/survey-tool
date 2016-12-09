import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AnswerService {
  	private webServiceUrl = 'http://localhost:3000/answers';  // URL to web api
  	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) {}

	getAnswers(): Promise<any> {
	    return this.http.get(this.webServiceUrl)
	               .toPromise()
	               .then(response => response.json() )
	               .catch(this.handleError);
	}

	storeAnswers(answers): Promise<any> {
		return this.http.post(this.webServiceUrl, JSON.stringify(answers), {headers: this.headers})
					.toPromise()
					.then(() => answers)
					.catch(this.handleError)
	}

	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
 	}
}