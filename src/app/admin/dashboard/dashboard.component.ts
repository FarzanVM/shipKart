import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faStore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FontAwesomeModule,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  faCartShopping=faCartShopping
  faStore=faStore

  constructor(private router:Router){}

  gotoaddproduct(){
    this.router.navigate(['admin','addproduct']);
  }
  gotostoreproducts(){
    this.router.navigate(['admin','storeproducts']);
  }

  gotoupdateproduct(){
    this.router.navigate(['admin','updateproduct']);
  }
}
