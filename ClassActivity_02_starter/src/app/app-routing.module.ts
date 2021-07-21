import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmailsComponent} from './emails/emails.component';


const routes: Routes = [{
  path: '',
  component: EmailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
