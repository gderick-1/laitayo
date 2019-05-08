import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManyaraRoutingModule } from './manyara-routing.module';
import { ManyaraComponent } from "./manyara.component";

@NgModule({
  declarations: [ ManyaraComponent ],
  imports: [
    CommonModule,
    ManyaraRoutingModule
  ]
})
export class ManyaraModule { }
