import { Component, Input } from '@angular/core';
import { Answers, Questions } from '../core/models/quiz-form.interface';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.scss'],
})
export class QuizAnswersComponent {
  @Input() questions: Array<Questions> = [];
  answers: Array<Answers> = []; //TO-DO INTERFACE

  ngOnInit() {
    console.log(this.questions);
    this.answers = this.createAnswers(this.questions);
  }

  createAnswers(questions: Array<Questions>): Array<Answers> {
    let data: Array<Answers> = [];
    questions.map((que: Answers) => {
      let questions = { ...que }; //TO-DO CRATE A CLASS
      questions['isCorrectAnswer'] = false;
      questions['options'] = [];
      questions['selected'] = null;
      let allAnswers = [que.correct_answer, ...que.incorrect_answers];
      allAnswers.map((data: string, index: number) => {
        questions.options?.push({
          label: data,
          value: index,
          isChecked: false,
        });
      });
      //questions.options?.push(que.correct_answer, ...que.incorrect_answers);
      data.push(questions);
    });
    return data;
  }

  show() {
    console.log(this.answers);
  }
}
