import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BikeInfoComponent } from "./pages/core/bike-info/bike-info.component";
import { CheckinOutComponent } from "./pages/core/checkin-out/checkin-out.component";
import { CheckinComponent } from "./pages/core/free-rooms/checkin/checkin.component";
import { RoomsComponent } from "./pages/core/free-rooms/rooms/rooms.component";
import { FruhstuckComponent } from "./pages/core/fruhstuck/fruhstuck.component";
import { HotelWebsiteComponent } from "./pages/core/hotel-website/hotel-website.component";
import { InformationComponent } from "./pages/core/information/information.component";
import { KontaktComponent } from "./pages/core/kontakt/kontakt.component";
import { RestaurantComponent } from "./pages/core/restaurant/restaurant.component";
import { SightseeingComponent } from "./pages/core/sightseeing/sightseeing.component";
import { HomeScanComponent } from "./pages/home-scan/home-scan.component";
import { HomeComponent } from "./pages/home/home.component";



const routes: Routes = [
    {
        path: '',
        component:HomeComponent,
    },
    {
        path: 'pages/home-scan',
        component:HomeScanComponent,
    },
    {
        path: 'pages/home-website',
        component:HotelWebsiteComponent,
    },
    {
        path: 'pages/free-rooms/rooms',
        component:RoomsComponent,
    },
    {
        path: 'pages/free-rooms/checkin',
        component:CheckinComponent,
    },
    {
        path: 'pages/bike-info',
        component:BikeInfoComponent,
    },
    {
        path: 'pages/fruhstuck',
        component:FruhstuckComponent,
    },
    {
        path: 'pages/information',
        component:InformationComponent,
    },
    {
        path: 'pages/kontakt',
        component:KontaktComponent,
    },
    {
        path: 'pages/sightseeing',
        component:SightseeingComponent,
    },
    {
        path: 'pages/restaurant',
        component:RestaurantComponent,
    },
    {
        path: 'pages/checkin-out',
        component:CheckinOutComponent,
    },
    

    // {
    //     path: '',
    //     canActivate: [CmsAuthGuard],
    //     loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
    //   },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRouting { }