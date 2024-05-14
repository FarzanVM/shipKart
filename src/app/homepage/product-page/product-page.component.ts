import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBolt, faBoltLightning, faCartShopping, faRupeeSign, faStar } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/productservice/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit {
  
  faStar=faStar;
  farupee = faRupeeSign;
  facart=faCartShopping;
  fabolt=faBoltLightning;

  product$:Observable<any> | undefined

  constructor(private productservice:ProductService){}

  ngOnInit(): void {
    const productId=localStorage.getItem('selectedProduct');
    this.product$=this.productservice.getSingleProduct(productId)
    this.product$.subscribe(res=>{
      console.log(res)
    })
  }

}
