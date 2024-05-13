import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBolt, faBoltLightning, faCartShopping, faRupeeSign, faStar } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/productservice/product.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [FontAwesomeModule],
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

  }

}
