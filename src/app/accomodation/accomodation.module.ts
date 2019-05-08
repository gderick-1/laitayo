import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccomodationRoutingModule } from './accomodation-routing.module';
import { AccomodationComponent } from './accomodation.component';

@NgModule({
  declarations: [AccomodationComponent],
  imports: [
    CommonModule,
    AccomodationRoutingModule
  ]
})
export class AccomodationModule { }
