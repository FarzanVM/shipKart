import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  addToCart(cart:any){
    return this.http.post('http://localhost:3000/api/cart/addtocart',cart)
  }

  getCartItems(userId:any){
    return this.http.post('http://localhost:3000/api/cart/getcartitems',userId)
  }
}
