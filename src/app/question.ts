export abstract class Question {
	id: number
	readonly type: string
	phrase: string
	description?: string

	public static fromJSONObject(jsonObject: any) {
		let typedObject;
		switch (jsonObject.type) {
			case "MultipleChoiceMultiSelect":
				typedObject = <MultipleChoiceMultiSelectQuestion>jsonObject;
				break;
			
			case "MultipleChoiceSingleSelect":
				typedObject = <MultipleChoiceSingleSelectQuestion>jsonObject;
				break;
			
			case "YesNo":
				typedObject = <YesNoQuestion>jsonObject;
				break;
			
			case "Text":
				typedObject = <OpenQuestion<string>>jsonObject;
				break;

			case "Number":
				typedObject = <OpenQuestion<number>>jsonObject;
				break;

			default:
				typedObject = null;
		}

		return typedObject;
	}

	public static fromJSONArray(jsonArray: any[]) {
		return jsonArray.map(object => Question.fromJSONObject(object));
	}

}

export class MultipleChoiceMultiSelectQuestion extends Question {
	readonly type = "MultipleChoiceMultiSelect"
	possible_answers: String[]
	answers: boolean[]
}

export class MultipleChoiceSingleSelectQuestion extends Question {
	readonly type = "MultipleChoiceSingleSelect"
	possible_answers: String[]
	answer?: number
}

export class YesNoQuestion extends Question {
	readonly type = "YesNo"
	answer?: boolean
}

export class OpenQuestion<T> extends Question {
	readonly type = "OpenQuestion"
	answer?: T
}