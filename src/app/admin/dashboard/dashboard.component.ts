import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faBasketShopping, faCartShopping, faFileLines, faStore,faUserLarge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  dropdown:boolean=false;
  faUserLarge=faUserLarge;
  fabasket = faBasketShopping;
  faorder = faFileLines;
  famessage=faMessage;

  constructor(private router:Router){}

  opendropdown(){
    this.dropdown=!this.dropdown
  }
  gotoHome(){
    this.router.navigate(['admin'])
  }

  gotoaddproduct(){
    this.router.navigate(['admin','addproduct']);
  }
  gotostoreproducts(){
    this.router.navigate(['admin','storeproducts']);
  }

  gotoupdateproduct(){
    this.router.navigate(['admin','updateproduct']);
  }
  gotoOrders(){
    this.router.navigate(['admin','orders'])
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('storename')
    this.router.navigate(['/'])
  }
}
