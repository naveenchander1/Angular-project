import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizService } from './core/services/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    QuizFormComponent,
    QuizAnswersComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [QuizService],
  bootstrap: [AppComponent],
})
export class AppModule {}
