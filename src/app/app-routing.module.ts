import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteResolver } from './core/resolver/quiz.resolver';
import { QuizResultComponent } from './quiz-result/quiz-result.component';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  {
    path: 'form',
    component: QuizFormComponent,
    resolve: {
      routeResolver: RouteResolver,
    },
  },
  {
    path: 'result',
    component: QuizResultComponent,
    resolve: {
      routeResolver: RouteResolver,
    },
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
