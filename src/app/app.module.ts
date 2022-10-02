import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { HomeComponent } from './pages/home/home.component';
import { FruhstuckComponent } from './pages/core/fruhstuck/fruhstuck.component';
import { InformationComponent } from './pages/core/information/information.component';
import { KontaktComponent } from './pages/core/kontakt/kontakt.component';
import { SightseeingComponent } from './pages/core/sightseeing/sightseeing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantComponent } from './pages/core/restaurant/restaurant.component';
import { CheckinOutComponent } from './pages/core/checkin-out/checkin-out.component';
import { RateStarComponent } from './pages/layout/components/rate-star/rate-star.component';
import { HomeScanComponent } from './pages/home-scan/home-scan.component';
import { HotelWebsiteComponent } from './pages/core/hotel-website/hotel-website.component';
import { RoomsComponent } from './pages/core/free-rooms/rooms/rooms.component';
import { CheckinComponent } from './pages/core/free-rooms/checkin/checkin.component';
import { MultiPersonComponent } from './pages/layout/components/multi-person/multi-person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FruhstuckComponent,
    InformationComponent,
    KontaktComponent,
    SightseeingComponent,
    RateStarComponent,
    RestaurantComponent,
    CheckinOutComponent,
    HomeScanComponent,
    HotelWebsiteComponent,
    RoomsComponent,
    CheckinComponent,
    MultiPersonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
