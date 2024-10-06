import { Routes } from '@angular/router';
import { UserLoginComponent } from './pages/userlogin/userlogin.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BrochureComponent } from './pages/homepage/brochure/brochure.component';
import { AllproductComponent } from './pages/homepage/allproduct/allproduct.component';
import { isLoggedInGuard } from './core/guards/is-logged-in.guard';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { WishlistComponent } from './pages/homepage/wishlist/wishlist.component';
import { authGuard } from './core/guards/auth.guard';
import { MycartComponent } from './pages/homepage/mycart/mycart.component';
import { MyorderComponent } from './pages/homepage/myorder/myorder.component';
import { ReviewComponent } from './pages/homepage/review/review.component';
import { CheckoutComponent } from './pages/homepage/checkout/checkout.component';
import { checkoutDeactivateGuard } from './core/guards/checkout-deactivate.guard';
import { ProfileComponent } from './pages/homepage/profile/profile.component';
import { ProductPageComponent } from './pages/homepage/product-page/product-page.component';

export const routes: Routes = [{
    path:'',
    component:HomepageComponent,
    children:[
        {
            path:'',
            component:BrochureComponent,
        },
            {
            path:'allproduct/:productname',
            component:AllproductComponent
        },
        {
            path:'login',
            component:UserLoginComponent,
            canActivate:[isLoggedInGuard]
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
            path:'review',
            component:ReviewComponent
        },
        {
            path:'checkout',
            component:CheckoutComponent,
            canActivate:[authGuard],
            canDeactivate:[checkoutDeactivateGuard]
        },
        {
            path:'profile',
            component:ProfileComponent,
            canActivate:[authGuard]
        },
        {
            path:'product',
            component:ProductPageComponent
        }
       ]},
        {
            path:'admin',
            loadChildren:()=>import('./pages/admin/admin.module').then(m=>m.AdminModule)
        }
    ];
