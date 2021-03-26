export class FeedBackItem {

  question: string;
  answer: string;
  answerList: Array<string>;


  constructor(value?: string) {
    this.question = value;
    this.answerList = ['Ei vielä vastattu', 'Huono', 'OK', 'Hyvä'];
    this.answer = this.answerList[0];

  }

  setAnswer(value: number) {
    this.answer = this.answerList[value];


  }
}
