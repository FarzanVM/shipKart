import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIndianRupee,faStar } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../core/services/wishlistservice/wishlist.service';

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

  constructor(private wishlistservice:WishlistService,private toastrservice:ToastrService){}
  ngOnInit(): void {
    const username=localStorage.getItem('username');

    const user={
      username:username
    }

    this.wishlistItems$= this.wishlistservice.getWishListItems(user)
  }

  removeFromWishList(product_id:any){
    this.wishlistservice.removeFromWishList(product_id).subscribe((res:any)=>{
      this.toastrservice.success(res.message)
      this.ngOnInit()
    },
  (error)=>{
    this.toastrservice.error(error.error.message)
  })

  }



}
