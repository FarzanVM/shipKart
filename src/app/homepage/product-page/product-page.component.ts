import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBolt, faBoltLightning, faCartShopping, faRupeeSign, faStar } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/productservice/product.service';
import { CommonModule } from '@angular/common';
import { SimpleproductcardComponent } from '../simpleproductcard/simpleproductcard.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,SimpleproductcardComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit {
  
  faStar=faStar;
  farupee = faRupeeSign;
  facart=faCartShopping;
  fabolt=faBoltLightning;

  product$:Observable<any> | undefined

  similarProducts$:Observable<any>|undefined;
  productcategory:String="";
  constructor(private productservice:ProductService){}

  ngOnInit(): void {
    const productId=localStorage.getItem('selectedProduct');
    this.product$=this.productservice.getSingleProduct(productId)
    this.product$.subscribe((product:any)=>{
      this.productcategory=product.productcategory
      console.log(this.productcategory)
      this.similarProducts$=this.productservice.getProductsByCategory(this.productcategory);
      this.similarProducts$.subscribe(res=>{
        console.log(res)
      })
    })
    

  }

}
