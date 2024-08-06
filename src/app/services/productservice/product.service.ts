import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  //for User
  getProducts(user:any,keyword:any){
    return this.http.post('http://localhost:3000/api/product/getproducts/'+keyword,user)
  }

  getSingleProduct(productId:any){
    return this.http.get('http://localhost:3000/api/product/getsingleproduct/'+productId)
  }

  getProductsByCategory(productCategory:any){
    return this.http.get('http://localhost:3000/api/product/getproductsbycategory/'+productCategory)
  }

  getProductsBy(item:any,sortby:string,orderby:string,user:any){
    return this.http.post('http://localhost:3000/api/product/getproductsby?item='+item+'&sortby='+sortby+'&orderby='+orderby,user)
  }

  getProductsByPriceRange(model:any,item:any){
    return this.http.post('http://localhost:3000/api/product/getproductsbypricerange?item='+item,model)
  }

  searchProduct(keyword:any){
    return this.http.get('http://localhost:3000/api/product/searchproducts/'+keyword);
  }

  getBestDeals(){
    return this.http.get('http://localhost:3000/api/product/getbestdeals')
  }

  //for Admin
   
  addProduct(product:any){
    return this.http.post('http://localhost:3000/api/product/addproduct',product)
  }

  getStoreProducts(store:any){
    return this.http.post('http://localhost:3000/api/product/getstoreproducts',store);
  }

  deleteProduct(productId:any){
    return this.http.delete('http://localhost:3000/api/product/deleteproduct/'+productId)
  }

  updateProduct(product:any){
    return this.http.put('http://localhost:3000/api/product/updateproduct',product)
  }

  updateStock(product:any){
    return this.http.put('http://localhost:3000/api/product/updatestock',product)
  }
}
