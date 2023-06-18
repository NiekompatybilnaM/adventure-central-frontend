import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RecentlyBoughtSectionComponent } from './recently-bought-section/recently-bought-section.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { ForCouplesComponent } from './for-couples/for-couples.component';
import { MountainLoversComponent } from './mountain-lovers/mountain-lovers.component';
import { BeachRelaxComponent } from './beach-relax/beach-relax.component';
import { ChildrenCampComponent } from './children-camp/children-camp.component';
import { BuyNowSectionComponent } from './buy-now-section/buy-now-section.component';
import { ToursPresentationSectionComponent } from './tours-presentation-section/tours-presentation-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    RecentlyBoughtSectionComponent,
    SearchSectionComponent,
    DataDisplayComponent,
    ForCouplesComponent,
    MountainLoversComponent,
    BeachRelaxComponent,
    ChildrenCampComponent,
    BuyNowSectionComponent,
    ToursPresentationSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
