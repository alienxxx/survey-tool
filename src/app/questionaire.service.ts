import { Injectable } from '@angular/core';

import { Question} from './question';
import { QUESTIONS } from './mock-questions';

@Injectable()
export class QuestionaireService {
	getQuestions() {
		return Question.fromJSONArray(QUESTIONS)
	};
}