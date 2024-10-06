import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  addReview(review:any){
    return this.http.post('http://localhost:3000/api/review/addreview',review)
  }

  getProductReview(productId:any){
    return this.http.get('http://localhost:3000/api/review/getproductreview/'+productId);
  }
}
