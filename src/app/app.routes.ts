import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BrochureComponent } from './homepage/brochure/brochure.component';
import { AllproductComponent } from './homepage/allproduct/allproduct.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MycartComponent } from './homepage/mycart/mycart.component';
import { authGuard } from './guards/auth.guard';
import { WishlistComponent } from './homepage/wishlist/wishlist.component';
import { MyorderComponent } from './homepage/myorder/myorder.component';
import { ProfileComponent } from './homepage/profile/profile.component';

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
        },
        {
            path:'adminlogin',
            component:AdminloginComponent
        },
        {
            path:'wishlist',
            component:WishlistComponent,
            canActivate:[authGuard]
        },
        {
            path:'mycart',
            component:MycartComponent,
            canActivate:[authGuard]
        },
        {
            path:'myorder',
            component:MyorderComponent,
            canActivate:[authGuard]
        },
        {
            path:'profile',
            component:ProfileComponent,
            canActivate:[authGuard]
        }
       ]},
        {
            path:'admin',
            loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
        }
    ];
