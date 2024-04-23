import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as faHeartFilled,faStar,faIndianRupee} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/sharedservice/auth.service';

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

  constructor(private router:Router,private authservice:AuthService){}

  addtoWishlist(){
    this.wishlisted=!this.wishlisted;
  }

  addtoCart(){
      this.router.navigate(['mycart'])
  }
}
