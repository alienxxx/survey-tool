import { Component } from '@angular/core';
import { Question } from './question';
import { QuestionCardComponent } from 'question-card.component'; 

const QUESTIONS: Question[] = [ {
	type: "MultipleChoice",
	id: 33243,
	phrase: "Where do you want to go today?",
	description: "Meaning a location or place where you would like to be.",
	default_answer: "Here",
	possible_answers: ["Haiti", "Malaga", "Turkey"]
} ]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  questions = QUESTIONS;
}
