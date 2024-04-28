import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as faHeartFilled, faStar, faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/sharedservice/auth.service';
import { CartService } from '../../services/cartservice/cart.service';
import { WishlistService } from '../../services/wishlistservice/wishlist.service';

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
  wishlisted: boolean = false;
  @Input() product: any;
  @Output() refreshNeeded= new EventEmitter<boolean>;

  constructor(private router: Router, private authservice: AuthService, private cartservice: CartService, private wishlistservice: WishlistService) { }

  ngOnInit(): void {
    console.log(this.product)
  }

  addtoWishlist(product_id: any) {
    this.wishlisted = !this.wishlisted;
    const username = localStorage.getItem('username')
    const product = {
      product_id: product_id,
      username: username
    }
    this.wishlistservice.addToWishList(product).subscribe(res => {
      console.log(res)
      this.refreshNeeded.emit(true)
    },
      error => {
        console.log(error.error.message)
      })
    // }
    // else {
    //   this.wishlistservice.removeFromWishList(product_id).subscribe(res => {
    //     console.log(res)
    //   })
    // }


  }

  addtoCart(productid: any) {

    const username = localStorage.getItem('username')
    const cart = {
      product_id: productid,
      username: username
    }
    console.log("cartitem", cart)
    this.cartservice.addToCart(cart).subscribe(res => {
      console.log("response", res)
    })

  }
}
