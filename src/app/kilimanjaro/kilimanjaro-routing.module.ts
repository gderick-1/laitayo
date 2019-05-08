import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KilimanjaroComponent } from "./kilimanjaro.component";

const routes: Routes = [
  { path: '', component: KilimanjaroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KilimanjaroRoutingModule { }
