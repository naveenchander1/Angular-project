import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Answers, Option, Questions } from '../core/models/quiz-form.interface';
import { QuizComponent } from '../quiz/quiz.component';
import { QuizService } from '../core/services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.scss'],
})
export class QuizAnswersComponent {
  @ViewChild(QuizComponent) quiz!: QuizComponent;
  @Input() questions: Array<Questions> = [];
  answers: Array<Answers> = []; //TO-DO INTERFACE
  isQuizVisible: boolean = false;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.answers = this.createAnswers(this.questions);
    this.isQuizVisible = true;
    console.log(this.answers);
  }

  createAnswers(questions: Array<Questions>): Array<Answers> {
    let data: Array<Answers> = [];
    questions.map((que: Answers) => {
      let questions = { ...que }; //TO-DO CRATE A CLASS
      questions['isCorrectAnswer'] = null;
      questions['options'] = [];
      questions['selected'] = null;
      let allAnswers = [que.correct_answer, ...que.incorrect_answers];
      allAnswers.sort(() => Math.random() - 0.5);
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

  submitAnswers() {
    console.log('quiz', this.quiz);
    this.quizService.setQuizData(this.quiz.answers);
    this.router.navigate(['result']);
  }
}
