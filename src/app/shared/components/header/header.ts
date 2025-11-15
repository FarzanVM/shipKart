import { Component, DestroyRef, OnInit } from '@angular/core';
import { SearchbarComponent } from '../../../pages/homepage/searchbar/searchbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faStore, faUserCircle, faCircleUser, faBoxOpen, faHeart, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/sharedservice/auth.service';
import { LoginsignupService } from '../../../core/services/sharedservice/loginsignup.service';
import { UserService } from '../../../core/services/userservice/user.service';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [SearchbarComponent,FontAwesomeModule,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit{
  faCartShopping=faCartShopping
  faStore=faStore
  faUserCircle=faUserCircle
  facircleUser = faCircleUser
  faBoxOpen=faBoxOpen
  faheart=faHeart
  fapowerOff = faPowerOff

  loggedIn:boolean=false;
  user:any;

  constructor(private destroyRef:DestroyRef, private router:Router,private loginsignupservice:LoginsignupService,private authservice:AuthService,private userservice:UserService){

  }
  ngOnInit(): void {
    const subscription = this.authservice.watchStorage().pipe(switchMap((value:boolean):Observable<any>=>{
      if(value){
        this.loggedIn=true
        const userId = localStorage.getItem('userId')
        if(userId){
          return this.userservice.getUser(userId);
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
    // this.router.navigate(['login'])
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
    localStorage.removeItem('userId')
    this.authservice.deauthenticateuser();
    this.router.navigate(['/'])
  }
}
