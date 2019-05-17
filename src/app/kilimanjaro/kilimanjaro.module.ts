import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KilimanjaroRoutingModule } from './kilimanjaro-routing.module';
import { KilimanjaroComponent } from "./kilimanjaro.component";

@NgModule({
  declarations: [ KilimanjaroComponent],
  imports: [
    CommonModule,
    KilimanjaroRoutingModule
  ]
})
export class KilimanjaroModule { }
