import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarangireComponent } from './tarangire.component';

const routes: Routes = [
  { path: '', component: TarangireComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarangireRoutingModule { }
