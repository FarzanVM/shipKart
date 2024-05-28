import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../services/productservice/product.service';
import { Router } from '@angular/router';

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

  constructor(private productservice:ProductService,private router:Router){}

  ngOnInit(): void {
    console.log(this.searchResults)
    const username = localStorage.getItem('username')
    const user={
      username:username
    }
    this.userInput.valueChanges.subscribe((data: any) => {
      if(data?.length){
        this.productservice.searchProduct(data).subscribe((res:any)=>{
          this.searchResults=res
        })
      }
     
    }
  )
  }

  search(){
    if(this.searchResults.length){
      localStorage.setItem('searchKey',this.userInput.value)
      this.searchResults=[]
      this.router.navigate(['allproduct',this.userInput.value])
    }
    
  }

}
