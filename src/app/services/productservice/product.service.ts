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

  deleteProduct(productId:any){
    return this.http.delete('http://localhost:3000/api/product/deleteproduct/'+productId)
  }

  getSingleProduct(productId:any){
    return this.http.get('http://localhost:3000/api/product/getsingleproduct/'+productId)
  }

  getProductsByCategory(productCategory:any){
    return this.http.get('http://localhost:3000/api/product/getproductsbycategory/'+productCategory)
  }

  getProductsBy(item:any,sortby:string,orderby:string){
    return this.http.get('http://localhost:3000/api/product/getproductsby?item='+item+'&sortby='+sortby+'&orderby='+orderby)
  }

  updateProduct(product:any){
    return this.http.put('http://localhost:3000/api/product/updateproduct',product)
  }

  searchProduct(keyword:any){
    return this.http.get('http://localhost:3000/api/product/searchproducts/'+keyword);
  }
}
