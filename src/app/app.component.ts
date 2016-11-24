import { Component } from '@angular/core';
import { Question} from './question';
import { QuestionCardComponent } from './question-card.component'; 

const QUESTIONS = [
{
	type: "Text",
	id: 123,
	phrase: "Where do you want to go today?",
	description: "Meaning a location or place where you would like to be.",
},
{
	type: "Number",
	id: 456,
	phrase: "Where do you want to go today?",
	description: "Meaning a location or place where you would like to be.",
},
{
	type: "MultipleChoiceMultiSelect",
	id: 42,
	phrase: "Where do you want to go today?",
	description: "Meaning a location or place where you would like to be.",
	possible_answers: ["Haiti", "Malaga", "Turkey"]
},
{
	type: "MultipleChoiceSingleSelect",
	id: 23,
	phrase: "Where do you want to go today?",
	description: "Meaning a location or place where you would like to be.",
	possible_answers: ["Haiti", "Malaga", "Turkey"]
},
{
	type: "YesNo",
	id: 110,
	phrase: "Where do you want to go today?",
	description: "Meaning a location or place where you would like to be.",
}]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questions = QUESTIONS;
}
