import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as faHeartFilled,faStar,faIndianRupee} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private router:Router){}

  addtoWishlist(){
    this.wishlisted=!this.wishlisted;
  }

  addtoCart(){
    const token = localStorage.getItem('token')
    if(token){

    }
    else{
      this.router.navigate(['login'])
    }
  }
}
