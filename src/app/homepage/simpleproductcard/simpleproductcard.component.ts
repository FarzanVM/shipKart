import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as faHeartFilled,faStar,faIndianRupee} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/sharedservice/auth.service';
import { CartService } from '../../services/cartservice/cart.service';

@Component({
  selector: 'app-simpleproductcard',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './simpleproductcard.component.html',
  styleUrl: './simpleproductcard.component.scss'
})
export class SimpleproductcardComponent {
  faHeart=faHeart;
  faHeartFilled = faHeartFilled
  faStar=faStar;
  farupee=faIndianRupee
  wishlisted:boolean=false;
  @Input() product:any;

  constructor(private router:Router,private authservice:AuthService,private cartservice:CartService){}

  addtoWishlist(){
    this.wishlisted=!this.wishlisted;
  }

  addtoCart(productid:any){

    const username = localStorage.getItem('username')
    const cart={
      product_id:productid,
      username:username
    }
    console.log("cartitem",cart)
      // this.router.navigate(['mycart'])
      this.cartservice.addToCart(cart).subscribe(res=>{
        console.log("response",res)
      })
      
  }
}
