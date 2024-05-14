import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productservice/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-best-deals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-deals.component.html',
  styleUrl: './best-deals.component.scss'
})
export class BestDealsComponent implements OnInit {

  bestdeals$:Observable<any>|undefined

  constructor(private productservice:ProductService){}

  ngOnInit(): void {
    const username=localStorage.getItem('username')
    this.bestdeals$=this.productservice.getProducts(username);
  }

}
