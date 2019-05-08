import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SafariComponent } from './safari.component';

const routes: Routes = [
  { path: '', component: SafariComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SafariRoutingModule { }
