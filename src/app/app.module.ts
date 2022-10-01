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
