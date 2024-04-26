import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }


  addToWishList(model:any){
    return this.http.post('http://localhost:3000/api/wishlist/addtowishlist',model)
  }
}
