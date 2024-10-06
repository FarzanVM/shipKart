import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  //for User

  getWishListItems(user:any){
    return this.http.post('http://localhost:3000/api/wishlist/getwishlistitems',user)
  }

  addToWishList(product:any){
    return this.http.post('http://localhost:3000/api/wishlist/addtowishlist',product)
  }

  removeFromWishList(id:any){
    return this.http.delete('http://localhost:3000/api/wishlist/removefromwishlist/'+id)
  }
}
