import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as faHeartFilled, faStar, faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/sharedservice/auth.service';
import { CartService } from '../../services/cartservice/cart.service';
import { WishlistService } from '../../services/wishlistservice/wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-simpleproductcard',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './simpleproductcard.component.html',
  styleUrl: './simpleproductcard.component.scss'
})
export class SimpleproductcardComponent implements OnInit {
  faHeart = faHeart;
  faHeartFilled = faHeartFilled
  faStar = faStar;
  farupee = faIndianRupee
  
  @Input() product: any;
  @Output() refreshNeeded= new EventEmitter<boolean>;

  constructor(private router: Router, private authservice: AuthService, private cartservice: CartService,
     private wishlistservice: WishlistService,private toastrservice:ToastrService) { }

  ngOnInit(): void {
  
  }

  addtoWishlist(product_id: any) {

    const username = localStorage.getItem('username')
    if (!username){
      this.router.navigate(['login'])
      return 
    }
    const product = {
      product_id: product_id,
      username: username
    }
    this.wishlistservice.addToWishList(product).subscribe((res:any)=> {
      this.toastrservice.success(res.message)
      this.refreshNeeded.emit(true)
    },
      error => {
        this.toastrservice.error(error.error.message)
      })
  }
  removeFromWishList(product_id:any){
    this.wishlistservice.removeFromWishList(product_id).subscribe((res:any)=>{
      this.toastrservice.success(res.message)
     this.refreshNeeded.emit(true)
    })
  }

  addtoCart(productid: any) {

    const username = localStorage.getItem('username')
    if (!username){
      this.router.navigate(['login'])
      return 
    }
    const cart = {
      product_id: productid,
      username: username
    }
    this.cartservice.addToCart(cart).subscribe((res:any) => {
      this.toastrservice.success(res.message)
      this.refreshNeeded.emit(true)

    },
    (error)=>{
      this.toastrservice.warning(error.error.message)
    }
    )
  }

  gotoProduct(productId:any){
    localStorage.setItem('selectedProduct',productId)
    this.router.navigate(['product'])
  }
}
