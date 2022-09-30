import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BikeInfoComponent } from "./pages/core/bike-info/bike-info.component";
import { CheckinOutComponent } from "./pages/core/checkin-out/checkin-out.component";
import { FruhstuckComponent } from "./pages/core/fruhstuck/fruhstuck.component";
import { InformationComponent } from "./pages/core/information/information.component";
import { KontaktComponent } from "./pages/core/kontakt/kontakt.component";
import { RestaurantComponent } from "./pages/core/restaurant/restaurant.component";
import { SightseeingComponent } from "./pages/core/sightseeing/sightseeing.component";
import { HomeComponent } from "./pages/home/home.component";



const routes: Routes = [
    {
        path: '',
        component:HomeComponent,
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