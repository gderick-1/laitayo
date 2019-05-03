import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }      from './app.component';
import { HomeComponent } from './home/home.component';
import { NgorongoroComponent } from "./ngorongoro/ngorongoro.component";
import { ManyaraComponent } from "./manyara/manyara.component";
import { SerengetiComponent } from "./serengeti/serengeti.component";
import { KilimanjaroComponent } from "./kilimanjaro/kilimanjaro.component";
import { ContactComponent } from "./contact/contact.component";
import { TarangireComponent } from "./tarangire/tarangire.component";
import { ZanzibarComponent } from "./zanzibar/zanzibar.component";
import { TravelguideComponent } from "./travelguide/travelguide.component";
import { BookingComponent } from "./booking/booking.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ngorongoro', component: NgorongoroComponent },
  { path: 'serengeti', component: SerengetiComponent },
  { path: 'manyara', component: ManyaraComponent },
  { path: 'kili', component: KilimanjaroComponent },
  { path: 'tara', component: TarangireComponent },
  { path: 'zanzibar', component: ZanzibarComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'guide', component: TravelguideComponent },
  { path: 'book', component: BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
     {
        enableTracing: true 
      } // for debugging purpose only
      )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
