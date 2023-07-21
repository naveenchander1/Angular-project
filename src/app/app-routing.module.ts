import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteResolver } from './core/resolver/quiz.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  {
    path: 'form',
    component: QuizFormComponent,
    resolve: {
      routeResolver: RouteResolver,
    },
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
