import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { MainRoutingModule } from './main-routing.module';
import { FirstPipe } from '../first.pipe';

@NgModule({
  declarations: [
    BookComponent,
    FirstPipe
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
