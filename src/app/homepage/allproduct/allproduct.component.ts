import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SimpleproductcardComponent } from '../simpleproductcard/simpleproductcard.component';
import { ProductService } from '../../services/productservice/product.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-allproduct',
  standalone: true,
  imports: [ProductCardComponent,CommonModule,SimpleproductcardComponent],
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.scss'
})
export class AllproductComponent implements OnInit{
  
  startVal:any;
  endVal:any;
  product$:Observable<any> | undefined;
  constructor(private productservice:ProductService){}

  ngOnInit(): void {
    this.product$ =  this.productservice.getProducts()
    this.product$.subscribe(res=>{
      console.log("prodc",res)
    })
  }
  
  selectRange(input:any){
    this.endVal=input.value;
    console.log("range value",input.value)
  }

}
