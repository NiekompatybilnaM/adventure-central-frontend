import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { BuyNowSectionComponent } from './buy-now-section/buy-now-section.component';
import { ToursPresentationSectionComponent } from './tours-presentation-section/tours-presentation-section.component';
import { RecentlyBoughtSectionComponent } from './recently-bought-section/recently-bought-section.component';
import { ForCouplesComponent } from './for-couples/for-couples.component';
import { MountainLoversComponent } from './mountain-lovers/mountain-lovers.component';
import { BeachRelaxComponent } from './beach-relax/beach-relax.component';
import { ChildrenCampComponent } from './children-camp/children-camp.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchSectionComponent },
  { path: 'buy-now', component: BuyNowSectionComponent },
  { path: 'tours', component: ToursPresentationSectionComponent },
  { path: 'recently-bought', component: RecentlyBoughtSectionComponent },
  { path: 'romantic-tours', component: ForCouplesComponent },
  { path: 'mountain-lovers', component: MountainLoversComponent },
  { path: 'beach-relax', component: BeachRelaxComponent },
  { path: 'children-camp', component: ChildrenCampComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
