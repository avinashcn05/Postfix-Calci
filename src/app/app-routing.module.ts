

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostFixCalculatorComponent } from './post-fix-calculator/post-fix-calculator.component';


const routes: Routes = [
  {
    path: 'postFix',
    component: PostFixCalculatorComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }