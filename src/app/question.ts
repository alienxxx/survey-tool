export abstract class Question {
	id: number
	phrase: string
	description?: string
	answer?: any
}

export class MultipleChoiceMultiSelectQuestion extends Question {
	type: string
	possible_answers: String[]
}

export class MultipleChoiceSingleSelectQuestion extends MultipleChoiceMultiSelectQuestion {
}

export class OpenQuestion<T> extends Question {
}