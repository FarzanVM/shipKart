import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductComponent } from './dashboard/addproduct/addproduct.component';
import { UpdateproductComponent } from './dashboard/updateproduct/updateproduct.component';
import { StoreproductsComponent } from './dashboard/storeproducts/storeproducts.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[{
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
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
