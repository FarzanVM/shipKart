import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faStore,faUserLarge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  dropdown:boolean=false;
  faUserLarge=faUserLarge

  constructor(private router:Router){}

  opendropdown(){
    this.dropdown=!this.dropdown
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

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('storename')
    this.router.navigate(['/'])
  }
}
