import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from "./main-layout/main-layout.component";


const routes: Routes = [
  { path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path: '', 
    component: MainLayoutComponent,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomeModule'},
      { path: 'ngorongoro', loadChildren: '../ngorongoro/ngorongoro.module#NgorongoroModule'},
      { path: 'serengeti', loadChildren: '../serengeti/serengeti.module#SerengetiModule'},
      { path: 'manyara', loadChildren: '../manyara/manyara.module#ManyaraModule' },
      { path: 'tara', loadChildren: '../tarangire/tarangire.module#TarangireModule'},
      { path: 'kili', loadChildren: '../kilimanjaro/kilimanjaro.module#KilimanjaroModule' },
      { path: 'zanzibar', loadChildren: '../zanzibar/zanzibar.module#ZanzibarModule' },
      { path: 'contact', loadChildren: '../contact/contact.module#ContactModule'},
      { path: 'guide', loadChildren: '../travelguide/travelguide.module#TravelguideModule'},
      { path: 'safari', loadChildren: '../safari/safari.module#SafariModule'},
      { path: 'accom', loadChildren: '../accomodation/accomodation.module#AccomodationModule'},
      { path: 'climb', loadChildren: '../climbing/climbing.module#ClimbingModule'},
      { path: 'about', loadChildren: '../about/about.module#AboutModule'},
      { path: 'book', loadChildren: '../booking/booking.module#BookingModule'}

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
