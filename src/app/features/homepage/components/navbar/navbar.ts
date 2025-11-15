import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  angleright=faChevronRight;
  angleleft=faChevronLeft;
  @ViewChild('navbar') container:ElementRef | any;

  constructor(private router:Router){}
  
  gotoProduct(searchKey:string){
    localStorage.setItem('searchKey',searchKey)
    this.router.navigate(['/allproduct',searchKey])
  }
  moveLeft(){
    this.container?.nativeElement.scrollTo({left: (this.container.nativeElement.scrollLeft - 150), behavior: 'smooth' })
  }
  moveRight(){
    this.container?.nativeElement.scrollTo({left: (this.container.nativeElement.scrollLeft + 150), behavior: 'smooth' })
  }
}
