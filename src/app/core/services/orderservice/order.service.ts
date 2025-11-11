import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  //For User

  addOrder(model:any){
    return this.http.post(environment.order_api+APIConstant.order.addOrder,model)

  }

  getorders(model:any){
    return this.http.post(environment.order_api+APIConstant.order.getOrders,model)
  }

  getPastOrders(model:any){
    return this.http.post(environment.order_api+APIConstant.order.getPastOrders,model)
  }

  getCurrentOrders(model:any){
    return this.http.post(environment.order_api+APIConstant.order.getCurrentOrders,model)
  }

  updateBulkOrders(model:any){
    return this.http.post(environment.order_api+APIConstant.order.updateBulkOrders,model)
  }

  deleteBulkOrders(model:any){
    return this.http.post(environment.order_api+APIConstant.order.deleteBulkOrders,model)
  }
  
  //for Admin

  getStoreOrders(model:any){
    return this.http.post(environment.order_api+APIConstant.order.getStoreOrders,model)
  }

  updateorder(model:any){
    return this.http.patch(environment.order_api+APIConstant.order.updateOrder,model)
  }

  getFullFilledOrders(store:any){
    return this.http.post(environment.order_api+APIConstant.order.getFulFilledOrders,store)
  }
}
