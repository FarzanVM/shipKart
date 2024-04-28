import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIndianRupee,faStar } from '@fortawesome/free-solid-svg-icons';
import { WishlistService } from '../../services/wishlistservice/wishlist.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  farupee = faIndianRupee
  faStar=faStar

  wishlistItems$:Observable<any>|null|undefined;

  constructor(private wishlistservice:WishlistService){}
  ngOnInit(): void {
    const username=localStorage.getItem('username');

    const user={
      username:username
    }

    this.wishlistItems$= this.wishlistservice.getWishListItems(user)
    this.wishlistItems$.subscribe(res=>{
      console.log(res)
    })

  }

  removeFromWishList(product_id:any){
    this.wishlistservice.removeFromWishList(product_id).subscribe(res=>{
      console.log(res)
      this.ngOnInit()
    })

  }



}
