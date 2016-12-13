import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from './model';

@Component({
  selector: 'question',
  templateUrl: './question-card.component.html'
})
export class QuestionCardComponent {
	@Input()
	question: Question

	@Input()
	index: number

	@Input()
	form: NgForm
}