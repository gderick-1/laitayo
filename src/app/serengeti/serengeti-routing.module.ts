import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerengetiComponent } from "./serengeti.component";

const routes: Routes = [ 
  { path: '' , component: SerengetiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SerengetiRoutingModule { }
