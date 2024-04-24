import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIndianRupee,faStar } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cartservice/cart.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SimpleproductcardComponent } from '../simpleproductcard/simpleproductcard.component';

@Component({
  selector: 'app-mycart',
  standalone: true,
  imports:[CommonModule,FontAwesomeModule],
  templateUrl: './mycart.component.html',
  styleUrl: './mycart.component.scss'
})
export class MycartComponent implements OnInit{
  farupee=faIndianRupee
  faStar=faStar
  cartItems$:Observable<any>|undefined;

  constructor(private cartservice:CartService){}

  ngOnInit(): void {
  const username=localStorage.getItem('username')
  const user={
    username:username
  }
  this.cartItems$ = this.cartservice.getCartItems(user)
  }



}
