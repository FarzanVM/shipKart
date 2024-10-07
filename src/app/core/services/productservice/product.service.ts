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

  getSingleProduct(productId:any){
    return this.http.get<Product>(environment.api+'product/getsingleproduct/'+productId)
  }

  getProductsByCategory(productCategory:any){
    return this.http.get<Product>(environment.api+'product/getproductsbycategory/'+productCategory)
  }

  getProductsBy(item:any,sortby:string,orderby:string,user:any){
    return this.http.post<Product>(environment.api+'product/getproductsby?item='+item+'&sortby='+sortby+'&orderby='+orderby,user)
  }

  getProductsByPriceRange(model:any,item:any){
    return this.http.post<Product>(environment.api+'product/getproductsbypricerange?item='+item,model)
  }

  searchProduct(keyword:any){
    return this.http.get(environment.api+'product/searchproducts/'+keyword);
  }

  getBestDeals(){
    return this.http.get<Product>(environment.api+'product/getbestdeals')
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
