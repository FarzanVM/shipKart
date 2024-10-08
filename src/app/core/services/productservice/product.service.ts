import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/interfaces/ProductModel.interface';
import { environment } from '../../../../environments/environment.development';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  //for User
  getProducts(user:any,keyword:any){
    return this.http.post<Product>(environment.api+ APIConstant.product.getProducts+keyword,user)
  }

  getSingleProduct(productId:string){
    return this.http.get<Product>(environment.api+APIConstant.product.getSingleProduct+productId)
  }

  getProductsByCategory(productCategory:string){
    return this.http.get<Product>(environment.api+APIConstant.product.getProductsByCategory+productCategory)
  }

  getProductsBy(item:any,sortby:string,orderby:string,user:any){
    return this.http.post<Product>(environment.api+APIConstant.product.getProductsBy+item+'&sortby='+sortby+'&orderby='+orderby,user)
  }

  getProductsByPriceRange(model:any,item:any){
    return this.http.post<Product>(environment.api+APIConstant.product.getProductsByPriceRange+item,model)
  }

  searchProduct(keyword:any){
    return this.http.get(environment.api+APIConstant.product.searchProduct+keyword);
  }

  getBestDeals(){
    return this.http.get<Product>(environment.api+APIConstant.product.bestDeals)
  }

  //for Admin
   
  addProduct(product:any){
    return this.http.post(environment.api+'product/addproduct',product)
  }

  getStoreProducts(store:any){
    return this.http.post(environment.api+'product/getstoreproducts',store);
  }

  deleteProduct(productId:any){
    return this.http.delete(environment.api+'product/deleteproduct/'+productId)
  }

  updateProduct(product:any){
    return this.http.put(environment.api+'product/updateproduct',product)
  }

  updateStock(product:any){
    return this.http.put(environment.api+'product/updatestock',product)
  }
}
