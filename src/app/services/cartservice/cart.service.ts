import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _refreshNeeded$=new Subject<void>();

  constructor(private http:HttpClient) { }

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  addToCart(cart:any){
    return this.http.post('http://localhost:3000/api/cart/addtocart',cart)
  }

  getCartItems(userId:any){
    return this.http.post('http://localhost:3000/api/cart/getcartitems',userId)
  }

  removeFromCart(product_id:any){
    return this.http.delete('http://localhost:3000/api/cart/removecartitem/'+product_id).pipe(tap(()=>{
    this._refreshNeeded$.next()
    }))
  }
}
