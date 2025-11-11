import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  //for User

  getWishListItems(user:any){
    return this.http.post(environment.wishlist_api+APIConstant.wishlist.getWishListItems,user)
  }

  addToWishList(product:any){
    return this.http.post(environment.wishlist_api+APIConstant.wishlist.addToWishList,product)
  }

  removeFromWishList(id:any){
    return this.http.delete(environment.wishlist_api+APIConstant.wishlist.removeFromWishList+id)
  }
}
