import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BrochureComponent } from './homepage/brochure/brochure.component';
import { AllproductComponent } from './homepage/allproduct/allproduct.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [{
    path:'',
    component:HomepageComponent,
    children:[
        {
            path:'',
            component:BrochureComponent,
        },
            {
            path:'allproduct',
            component:AllproductComponent
        },
        {
            path:'login',
            component:LoginComponent
        }
]
}];
