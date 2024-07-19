
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/productservice/product.service';
import { min } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule,FontAwesomeModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent implements OnInit{
 
  constructor(private productservice:ProductService,private toastrservice:ToastrService){}
  url:any;
  invalidForm:boolean=true;
  facaretright = faCaretRight;

  productForm=new FormGroup({
    productname:new FormControl('',Validators.required),
    productcategory:new FormControl('',Validators.required),
    productdesc:new FormControl('',Validators.required),
    productprice:new FormControl<number>(0,[Validators.required,Validators.min(0)]),
    productdiscount:new FormControl<number>(0,[Validators.required,Validators.max(100),Validators.min(0)]),
    productnewprice:new FormControl<number>(0,Validators.required),
    productquantity:new FormControl('',Validators.required),
    productimg:new FormControl('',Validators.required)
  })
  ngOnInit(): void {

    this.productForm.controls.productprice.valueChanges.subscribe(()=>{
      this.productForm.patchValue({productnewprice:this.productForm.controls.productprice?.value})
      this.productForm.patchValue({productdiscount:0})
    })

    this.productForm.controls.productdiscount.valueChanges.subscribe(()=>{
  
      const orgPrice= this.productForm.controls.productprice?.value;
      const discount= this.productForm.controls.productdiscount?.value;
      if(orgPrice!=null && discount!=null){
        const discountprice:number= Math.round((orgPrice*discount)/100 )
        this.productForm.patchValue({productnewprice:orgPrice-discountprice})
      }
    })
    this.productForm.valueChanges.subscribe(()=>{
      if(!this.productForm.invalid){
        this.invalidForm=false;
      }
      else{
        this.invalidForm=true;
      }
    })
    
  }


  getImage(event:any){
    const files = event.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(files[0])
   reader.onload=()=>{
      this.url = reader.result
      this.productForm.patchValue({productimg:this.url})
    } 
  }

  addProduct(){
  
    let storename = localStorage.getItem('storename');
    const product = {...this.productForm.value,
      storename:storename
    }
    console.log("added",product)
  //   this.productservice.addProduct(product).subscribe((res:any)=>{
  //     this.toastrservice.success(res.message)
  //     this.productForm.reset()
  //     this.url=""
  //   },
  // (error)=>{
  //   this.toastrservice.error(error.error.message)
  //   this.productForm.reset()
  // })
  }

}
