import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './dashboard/signup/signup.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';

const routes: Routes = [
  {
    path:'',
    component: SignupComponent
  },
  {
    path:'portfolio',
    component:PortfoliosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
