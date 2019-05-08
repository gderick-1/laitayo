import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClimbingComponent } from './climbing.component';

const routes: Routes = [
  { path: '', component: ClimbingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClimbingRoutingModule { }
