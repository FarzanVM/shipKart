import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _refreshNeeded$=new Subject<void>();

  constructor(private http:HttpClient) { }

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  //for User

  addToCart(cart:any){
    return this.http.post(environment.cart_api+APIConstant.cart.addToCart,cart)
  }

  getCartItems(userId:any){
    return this.http.post(environment.cart_api+APIConstant.cart.getCartItems,userId)
  }

  removeFromCart(product_id:any){
    return this.http.delete(environment.cart_api+APIConstant.cart.removeFromCart+product_id).pipe(tap(()=>{
    this._refreshNeeded$.next()
    }))
  }
}
