import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuizService } from '../core/services/quiz.service';
import { Answers, Option } from '../core/models/quiz-form.interface';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss'],
})
export class QuizResultComponent implements OnInit {
  subscription: Subscription = new Subscription();
  answers: Array<Answers> = [];
  isResultVisible: boolean = false;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.answers = this.quizService.getQuizData();
    if (this.answers) {
      this.isResultVisible = true;
      this.submitAnswers();
    }
  }

  submitAnswers() {
    this.answers.map((answer: Answers) => {
      answer.isCorrectAnswer = this.isCorrectAnswer(
        answer.correct_answer,
        answer.selected ?? ''
      );
      if (!answer.isCorrectAnswer) {
        answer.options?.map((option: Option) => {
          answer.correct_answer == option.label
            ? (option.isChecked = true)
            : null;
          answer.selected == option.label
            ? (option.isIncorrectAnswer = true)
            : null;
        });
      }
    });
    console.log(this.answers);
  }

  isCorrectAnswer(correctAnswer: string, selctedAnswer: string): boolean {
    return correctAnswer.toLowerCase() === selctedAnswer.toLowerCase();
  }
}
