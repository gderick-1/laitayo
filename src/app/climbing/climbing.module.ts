import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClimbingRoutingModule } from './climbing-routing.module';
import { ClimbingComponent } from './climbing.component';

@NgModule({
  declarations: [ClimbingComponent],
  imports: [
    CommonModule,
    ClimbingRoutingModule
  ]
})
export class ClimbingModule { }
