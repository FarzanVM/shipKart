import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  addReview(review:any){
    return this.http.post(environment.review_api+APIConstant.review.addReview,review)
  }

  getProductReview(productId:any){
    return this.http.get(environment.review_api+APIConstant.review.getProductReview+productId);
  }
}
