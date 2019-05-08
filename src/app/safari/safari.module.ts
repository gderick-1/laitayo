import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafariRoutingModule } from './safari-routing.module';
import { SafariComponent } from './safari.component';

@NgModule({
  declarations: [SafariComponent],
  imports: [
    CommonModule,
    SafariRoutingModule
  ]
})
export class SafariModule { }
