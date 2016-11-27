import { Component } from '@angular/core';
import { Question} from './question';
import { QuestionCardComponent } from './question-card.component'; 

const QUESTIONS = [
{
	type: "Text",
	id: 1,
	phrase: "Where do you want to go today?",
	description: "Meaning a location or place where you would like to be.",
},
{
	type: "Number",
	id: 2,
	phrase: "Where do you want to go today?",
	description: "Meaning a location or place where you would like to be.",
	answer: "foobarx"
},
{
	type: "MultipleChoiceMultiSelect",
	id: 3,
	phrase: "Where do you want to go today?",
	description: "Meaning a location or place where you would like to be.",
	possible_answers: ["Haiti", "Malaga", "Turkey"],
	answer: [false,false,false]
},
{
	type: "MultipleChoiceSingleSelect",
	id: 4,
	phrase: "Where do you want to go today?",
	description: "Meaning a location or place where you would like to be.",
	possible_answers: ["Haiti", "Malaga", "Turkey"],
},
{
	type: "YesNo",
	id: 5,
	phrase: "Where do you want to go today?",
	description: "Meaning a location or place where you would like to be.",
}]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkTheme = false;
  questions = QUESTIONS;
	  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.questions); }
}
