import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(product:any){
    return this.http.post('http://localhost:3000/api/product/addproduct',product)
  }
  getProducts(){
    return this.http.get('http://localhost:3000/api/product/getproducts')
  }
  getStoreProducts(store:any){
    return this.http.post('http://localhost:3000/api/product/getstoreproducts',store);
  }
}
