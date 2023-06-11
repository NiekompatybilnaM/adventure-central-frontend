import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BuyNowSectionComponent } from './buy-now-section/buy-now-section.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { ToursPresentationSectionComponent } from './tours-presentation-section/tours-presentation-section.component';
import { RecentlyBoughtSectionComponent } from './recently-bought-section/recently-bought-section.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchSectionComponent },
  { path: 'buy-now', component: BuyNowSectionComponent },
  { path: 'tours', component: ToursPresentationSectionComponent },
  { path: 'recently-bought', component: RecentlyBoughtSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
