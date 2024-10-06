import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { SimpleproductcardComponent } from '../simpleproductcard/simpleproductcard.component';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faAngleRight, faIndianRupeeSign, faStar } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../../core/services/productservice/product.service';

@Component({
  selector: 'app-allproduct',
  standalone: true,
  imports: [CommonModule, SimpleproductcardComponent,RouterModule,FontAwesomeModule],
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.scss'
})
export class AllproductComponent implements OnInit,AfterViewInit{

  startVal: any;
  endVal: any;

  opendiscount=false;
  openrating=false;

  leftPos:string="0";
  rightPos:string="0";

  angledown=faAngleDown;
  fastar = faStar;
  farupee=faIndianRupeeSign;
  angleright = faAngleRight;

  totalresults:number=0;
  product$: Observable<any> | undefined | any;
  wishlist$: Observable<any> | undefined | any;
  loadedData:boolean=false;
  currentlevel:string|null="";

  notFound:boolean=true;

  @ViewChild('progress') progress:ElementRef|any;
  @ViewChild('minrange') minrange:ElementRef|any;
  @ViewChild('maxrange') maxrange:ElementRef|any;

  constructor(private productservice: ProductService,private route:ActivatedRoute) { }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.startVal=this.minrange.nativeElement?.value;
      this.endVal = this.maxrange.nativeElement?.value;
       this.leftPos = (this.startVal/100000)*100+"%"
         this.rightPos=100-(this.endVal/100000)*100+"%"
      console.log("start",this.startVal,"end",this.endVal)
    })
   
  }

  findResultCount(){
    this.product$.subscribe((res: any)=>{
      this.totalresults=res.length
    })
  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>{
      const searchKey= localStorage.getItem('searchKey')
      this.currentlevel=searchKey;

      const username = localStorage.getItem('username')

      const user={
        username:username
      }
      this.product$ = this.productservice.getProducts(user,searchKey)
      this.findResultCount()
      
    })
    // this.product$ = this.productservice.getProducts(username)
  
 

  }
  refresh($event: any) {
    console.log("event added")
    if ($event) {
      this.ngOnInit();
    }
  }
  selectMinRange(input:any){
    this.startVal=input.value
    if(this.endVal-this.startVal<1000){
      input.value = this.endVal-1000
      this.startVal=input.value
    }
    this.leftPos = (this.startVal/input.max)*100+"%"
  }
  selectMaxRange(input: any) {
    this.endVal = input.value;
    if(this.endVal-this.startVal<1000){
      input.value=parseInt(this.startVal)+1000
      this.endVal=input.value
    }
    this.rightPos=100-(this.endVal/input.max)*100+"%"
  }

  getStartRange(){
    this.getProducts_By_PriceRange()
  }
  getEndRange(){
    this.getProducts_By_PriceRange()
  }

  getProductsBy(order:string){
    const searchKey= localStorage.getItem('searchKey')
    const username = localStorage.getItem('username')

    const user={
      username:username,
      startrange:parseInt(this.startVal),
      endrange:parseInt(this.endVal)
    }
    this.product$=this.productservice.getProductsBy(searchKey,'price',order,user)
    this.findResultCount()
  }

  getProducts_By_PriceRange(){
    const searchKey= localStorage.getItem('searchKey')
    const username = localStorage.getItem('username')

    const user={
      username:username,
      startrange:parseInt(this.startVal),
      endrange:parseInt(this.endVal)
    }
    this.product$ = this.productservice.getProductsByPriceRange(user,searchKey)
    this.findResultCount()
  }

  openDiscount(){
    this.opendiscount=!this.opendiscount;
  }
  openRating(){
    this.openrating=!this.openrating;
  }

}
function findResultCount() {
  throw new Error('Function not implemented.');
}

