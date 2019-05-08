import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManyaraComponent } from "./manyara.component";
const routes: Routes = [
  { path: '', component: ManyaraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManyaraRoutingModule { }
