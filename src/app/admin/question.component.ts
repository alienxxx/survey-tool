import { Component, Input } from '@angular/core';

import { Question } from '../model';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
})
export class QuestionComponent {
  @Input()
  protected question: Question
}
