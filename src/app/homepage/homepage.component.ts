import { Component, OnInit } from '@angular/core';
import { OfferComponent } from './offer/offer.component';
import { BestDealsComponent } from './best-deals/best-deals.component';
import { Router, RouterOutlet } from '@angular/router';
import { faCartShopping ,faStore,faUserCircle,faBoxOpen, faPowerOff} from '@fortawesome/free-solid-svg-icons';
import { faCircleUser,faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllproductComponent } from './allproduct/allproduct.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { LoginComponent } from '../login/login.component';
import { LoginsignupService } from '../services/sharedservice/loginsignup.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/sharedservice/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [OfferComponent,BestDealsComponent,RouterOutlet,FontAwesomeModule,SearchbarComponent,LoginComponent,CommonModule],
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

  loggedIn$:Observable<any> | undefined;

  constructor(private router:Router,private loginsignupservice:LoginsignupService,private authservice:AuthService){}

  ngOnInit(): void {
    this.loggedIn$ = this.authservice.watchStorage();

  }
  openLoginForm(){
    this.router.navigate(['login'])
  }
  openloginFormSeller(){
    console.log("clcikk")
    this.router.navigate(['adminlogin'])
  }
  gotosignup(){
    this.loginsignupservice.setFormType('signup');
    this.router.navigate(['login'])
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('username')
    this.authservice.deauthenticateuser();
    this.router.navigate(['/'])
  }

}
