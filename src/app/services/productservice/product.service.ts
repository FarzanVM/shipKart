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
  getProducts(username:any){

    return this.http.get('http://localhost:3000/api/product/getproducts/'+username)
  }
  getStoreProducts(store:any){
    return this.http.post('http://localhost:3000/api/product/getstoreproducts',store);
  }

  deleteProduct(productid:any){
    return this.http.delete('http://localhost:3000/api/product/deleteproduct/'+productid)
  }

  getProduct(){
    
  }

  updateProduct(product:any){
    return this.http.put('http://localhost:3000/api/product/updateproduct',product)
  }
}
