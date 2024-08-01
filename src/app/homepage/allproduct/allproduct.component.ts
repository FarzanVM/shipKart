import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SimpleproductcardComponent } from '../simpleproductcard/simpleproductcard.component';
import { ProductService } from '../../services/productservice/product.service';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../services/wishlistservice/wishlist.service';
import { AuthService } from '../../services/sharedservice/auth.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faAngleRight, faIndianRupeeSign, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-allproduct',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, SimpleproductcardComponent,RouterModule,FontAwesomeModule],
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

  @ViewChild('progress') progress:ElementRef|any;
  @ViewChild('minrange') minrange:ElementRef|any;
  @ViewChild('maxrange') maxrange:ElementRef|any;

  constructor(private productservice: ProductService,private route:ActivatedRoute) { }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.startVal=this.minrange.nativeElement?.value;
      this.endVal = this.maxrange.nativeElement?.value;
       this.leftPos = (this.startVal/10000)*100+"%"
         this.rightPos=100-(this.endVal/10000)*100+"%"
      console.log("start",this.startVal,"end",this.endVal)
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
      this.product$.subscribe((res: any)=>{
        this.totalresults=res.length
        console.log(res)
      })
      
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
    console.log("Start range",this.startVal);
  }
  getEndRange(){
    console.log("End range",this.endVal);
  }
  getProductsBy(order:string){
    const searchKey= localStorage.getItem('searchKey')
    const username = localStorage.getItem('username')

    const user={
      username:username
    }
    this.product$=this.productservice.getProductsBy(searchKey,'price',order,user)
  }

  openDiscount(){
    this.opendiscount=!this.opendiscount;
  }
  openRating(){
    this.openrating=!this.openrating;
  }

}
