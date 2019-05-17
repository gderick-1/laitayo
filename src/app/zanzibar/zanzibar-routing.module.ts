import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZanzibarComponent } from "./zanzibar.component";

const routes: Routes = [ 
  { path: '', component: ZanzibarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZanzibarRoutingModule { }
