import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgorongoroComponent } from "./ngorongoro.component";

const routes: Routes = [
  { path: '', component: NgorongoroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgorongoroRoutingModule { }
