import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  //For User

  addOrder(model:any){
    return this.http.post('http://localhost:3000/api/order/addorder',model)

  }

  getorders(model:any){
    return this.http.post('http://localhost:3000/api/order/getorders',model)
  }

  getCurrentOrders(model:any){
    return this.http.post('http://localhost:3000/api/order/getcurrentorders',model)
  }

  updateBulkOrders(model:any){
    return this.http.post('http://localhost:3000/api/order/updatebulkorders',model)
  }

  deleteBulkOrders(model:any){
    return this.http.post('http://localhost:3000/api/order/deletebulkorders',model)
  }
  
  //for Admin

  getStoreOrders(model:any){
    return this.http.post('http://localhost:3000/api/order/getstoreorders',model)
  }

  updateorder(model:any){
    return this.http.patch('http://localhost:3000/api/order/updateorder',model)
  }

  getFullFilledOrders(store:any){
    return this.http.post('http://localhost:3000/api/order/getfullfilledorders',store)
  }
}
