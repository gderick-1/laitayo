import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelguideRoutingModule } from './travelguide-routing.module';
import { TravelguideComponent } from "./travelguide.component";

@NgModule({
  declarations: [ TravelguideComponent],
  imports: [
    CommonModule,
    TravelguideRoutingModule
  ]
})
export class TravelguideModule { }
