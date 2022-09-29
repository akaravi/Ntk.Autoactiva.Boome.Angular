import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BikeInfoComponent } from "./pages/core/bike-info/bike-info.component";
import { HomeComponent } from "./pages/home/home.component";



const routes: Routes = [
    {
        path: '',
        component:HomeComponent,
    },
    {
        path: 'pages/bike-info',
        component:BikeInfoComponent,
    }

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