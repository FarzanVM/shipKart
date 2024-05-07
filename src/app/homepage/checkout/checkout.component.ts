import { CommonModule, LocationStrategy, PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../services/userservice/user.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit{
  facreditcard=faCreditCard;
  fagooglepay=faGooglePay;
  fabank=faBuildingColumns;
  user$:Observable<any>|undefined;
  constructor(private userservice:UserService,private platformLocation:PlatformLocation, private locationStrategy: LocationStrategy){
   
  }

  ngOnInit(): void {
    const username=localStorage.getItem('username')
    if(username){
      this.user$ =  this.userservice.getUser(username)
    }
    
  }

}
