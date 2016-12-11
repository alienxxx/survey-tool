export class Answer {
	constructor(public questionId: number, public value?: any) {}
}

export class Department {
	_id: number
	name: string
	members: string[]
	answers?: Answer[]
}

export class Question {
	_id: number
	readonly type: string
	phrase: string
	description?: string
	possible_answers?: string[]
	answer?: Answer

	public static fromJSONArray(jsonArray: any[]) {
		return jsonArray.map(object => object as Question);
	}

}