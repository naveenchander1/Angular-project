import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category, Questions } from '../core/models/quiz-form.interface';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../core/services/quiz.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss'],
})
export class QuizFormComponent implements OnInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService
  ) {}

  subscription: Subscription = new Subscription();
  categoryList: Array<Category> = [];
  levelList: Array<string> = [];
  quizForm = this.fb.group({
    category: ['', [Validators.required]],
    difficulty: ['', [Validators.required]],
  });
  quizAnswersVisible: boolean = false;
  questions: Array<Questions> = [];

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe((data) => {
      console.log(data);
      this.categoryList = data['routeResolver'].trivia_categories;
    });

    this.levelList = ['easy', 'medium', 'hard'];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectCategory() {}

  submitForm() {
    const formValue = this.quizForm.value;
    const params: any = {
      amount: 5,
      category: formValue.category,
      difficulty: formValue.difficulty,
      type: 'multiple',
    };
    this.quizService.getQuestions(params).subscribe({
      next: (data) => {
        console.log('data', data);
        this.quizAnswersVisible = true;
        this.questions = data.results;
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
}
