import { Component, DestroyRef, OnInit } from '@angular/core';
import { OfferComponent } from './brochure/offer/offer.component';
import { Router, RouterOutlet } from '@angular/router';
import { faCartShopping ,faStore,faUserCircle,faBoxOpen, faPowerOff} from '@fortawesome/free-solid-svg-icons';
import { faCircleUser,faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CommonModule } from '@angular/common';
import { Observable, of,switchMap } from 'rxjs';

import { UserLoginComponent } from '../userlogin/userlogin.component';
import { LoginsignupService } from '../../core/services/sharedservice/loginsignup.service';
import { AuthService } from '../../core/services/sharedservice/auth.service';
import { UserService } from '../../core/services/userservice/user.service';
import { BestDealsComponent } from './brochure/best-deals/best-deals.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [OfferComponent,BestDealsComponent,RouterOutlet,FontAwesomeModule,SearchbarComponent,UserLoginComponent,CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  faCartShopping=faCartShopping
  faStore=faStore
  faUserCircle=faUserCircle
  facircleUser = faCircleUser
  faBoxOpen=faBoxOpen
  faheart=faHeart
  fapowerOff = faPowerOff

  loggedIn:boolean=false;
  user:any;

  constructor(private destroyRef:DestroyRef, private router:Router,private loginsignupservice:LoginsignupService,private authservice:AuthService,private userservice:UserService){}

  ngOnInit(): void {
    const subscription = this.authservice.watchStorage().pipe(switchMap((value:boolean):Observable<any>=>{
      if(value){
        this.loggedIn=true
        const username = localStorage.getItem('username')
        if(username){
          return this.userservice.getUser(username);
        }
      }
        this.loggedIn=false
        return of(undefined)
      
    })).subscribe(user=>{
      this.user=user
    })
    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe()
    })

  }
  openLoginForm(){
    this.router.navigate(['login'])
  }
  openloginFormSeller(){
    this.router.navigate(['adminlogin'])
  }

  gotoHomePage(){
    this.router.navigate([''])
  }

  gotosignup(){
    this.loginsignupservice.setFormType('signup');
    this.router.navigate(['login'])
  }

  gotoProfile(){
    this.router.navigate(['profile'])
  }
  gotoWishList(){
    this.router.navigate(['wishlist'])
  }
  gotoMyCart(){
    this.router.navigate(['mycart'])
  }
  gotoMyOrders(){
    this.router.navigate(['myorder'])
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('username')
    this.authservice.deauthenticateuser();
    this.router.navigate(['/'])
  }

}
