import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  addOrder(model:any){
    return this.http.post('http://localhost:3000/api/order/addorder',model)

  }

  updateorder(model:any){
    return this.http.patch('http://localhost:3000/api/order/updateorder',model)
  }

  getorders(model:any){
    return this.http.post('http://localhost:3000/api/order/getorders',model)
  }

  getStoreOrders(model:any){
    return this.http.post('http://localhost:3000/api/order/getstoreorders',model)
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
}
