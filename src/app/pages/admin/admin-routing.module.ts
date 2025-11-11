import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductComponent } from './dashboard/addproduct/addproduct.component';
import { UpdateproductComponent } from './dashboard/updateproduct/updateproduct.component';
import { StoreproductsComponent } from './dashboard/storeproducts/storeproducts.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { ReviewComponent } from '../homepage/review/review.component';
import { ProductReviewComponent } from './dashboard/product-review/product-review.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[{
      path:'',
      component:OverviewComponent
    },  
      {
      path:'addproduct',
      component:AddproductComponent
    },
    {
      path:'updateproduct',
      component:UpdateproductComponent
    },
    {
      path:'storeproducts',
      component:StoreproductsComponent
    },
    {
      path:'orders',
      component:OrdersComponent
    },
    {
      path:'reviews',
      component:ProductReviewComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
