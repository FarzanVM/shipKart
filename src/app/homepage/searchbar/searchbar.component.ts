import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../services/productservice/product.service';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent implements OnInit {
  mockdata: any[] = ["mobiles", "toys", "dress", "Iphone"]
  faSearch = faSearch;
  searchResults: any[]= [];

  userInput: any = new FormControl('')
  noresult:boolean=true;

  constructor(private productservice:ProductService,private router:Router,private destroyRef:DestroyRef){}

  ngOnInit(): void {
    const username = localStorage.getItem('username')
    const user={
      username:username
    }
    const subscription = this.userInput.valueChanges.pipe(debounceTime(500)).subscribe((data: any) => {
      if(data?.length){
        this.productservice.searchProduct(data).subscribe((res:any)=>{
          this.searchResults=res
        })
      }
     
    }
  )
  this.destroyRef.onDestroy((()=>{
    subscription.unsubscribe();
  }))

  }

  search(){
    if(this.searchResults.length){
      localStorage.setItem('searchKey',this.userInput.value)
      this.searchResults=[]
      this.noresult=false
      this.router.navigate(['allproduct',this.userInput.value])
    }
    
  }

  searchProduct(product:string){
    localStorage.setItem('searchKey',product)
    this.searchResults=[]
    this.userInput.value=product
    this.noresult=false
    this.router.navigate(['allproduct',product])
  }

}
