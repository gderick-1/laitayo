import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelguideComponent } from "./travelguide.component";

const routes: Routes = [ 
  { path: '', component: TravelguideComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelguideRoutingModule { }
