import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { ReviewService } from '../../../../core/services/reviewservice/review.service';

@Component({
  selector: 'app-product-review',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './product-review.component.html',
  styleUrl: './product-review.component.scss'
})
export class ProductReviewComponent implements OnInit{

  reviews$:Observable<any>|undefined;
  facaretright=faCaretRight;
  fastar=faStar;

  constructor(private reviewservice:ReviewService){}

  ngOnInit(): void {
    const productId = localStorage.getItem('reviewProductId')
    this.reviews$ = this.reviewservice.getProductReview(productId)

    this.reviews$.subscribe(res=>{
      console.log("review",res)
    })
    
  }

}
