import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/productservice/product.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductUpdateService } from '../../../services/sharedservice/product-update.service';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-storeproducts',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './storeproducts.component.html',
  styleUrl: './storeproducts.component.scss'
})
export class StoreproductsComponent implements OnInit {

  facaretright=faCaretRight;

  storeProducts$:Observable<any> | undefined;

  selectedProduct:any;
  selectedIndex:number=0;
  currentSection:string="desc"

  constructor(private productservice:ProductService,private productupdateservice:ProductUpdateService,private router:Router){}

  ngOnInit(): void {
    const storename = localStorage.getItem('storename')
    console.log("storename",storename)
    const store = {
      storename:storename
    }
    this.storeProducts$ = this.productservice.getStoreProducts(store);
    this.storeProducts$.subscribe(data =>{
      this.selectedProduct=data[0]
    })
    // this.productservice.getStoreProducts(store).subscribe(res=>{
    //   console.log("store products",res)
    // })
  }
 
  deleteProduct(){
    const product = {
      id:this.selectedProduct._id
    }
    this.productservice.deleteProduct(this.selectedProduct._id).subscribe(res =>{
      console.log(res)
      this.ngOnInit()
    })
    
  }
  updateProduct(){
    this.productupdateservice.product = this.selectedProduct;
    this.router.navigate(['admin','updateproduct']);
  }
  selectProduct(product:any,index:number){ 
    this.selectedIndex=index;
      this.selectedProduct=product
  }
  scrollToElement($element:any,section:string){
    this.currentSection=section;
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  gotoReview(){
    localStorage.setItem('reviewProductId',this.selectedProduct._id)
    console.log(this.selectedProduct._id) 
    this.router.navigate(['admin','reviews'])
  }

}
