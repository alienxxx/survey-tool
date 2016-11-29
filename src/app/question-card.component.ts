import { Component, Input } from '@angular/core';
import { YesNoQuestion, Question } from './question';

@Component({
  selector: 'question',
  templateUrl: './question-card.component.html'
})
export class QuestionCardComponent {
	@Input()
	question: Question

	@Input()
	index: number
}