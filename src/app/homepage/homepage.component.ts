import { Component, OnInit } from '@angular/core';
import { OfferComponent } from './offer/offer.component';
import { BestDealsComponent } from './best-deals/best-deals.component';
import { Router, RouterOutlet } from '@angular/router';
import { faCartShopping ,faStore,faUserCircle,faBoxOpen} from '@fortawesome/free-solid-svg-icons';
import { faCircleUser,faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllproductComponent } from './allproduct/allproduct.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [OfferComponent,BestDealsComponent,RouterOutlet,FontAwesomeModule,SearchbarComponent,LoginComponent],
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

  constructor(private router:Router){}

  ngOnInit(): void {

  }
  openLoginForm(){
    this.router.navigate(['login'])
  }
  openloginFormSeller(){
    console.log("clcikk")
    this.router.navigate(['adminlogin'])
  }
  gotosignup(){
    this.router.navigate(['login'])
  }

}
