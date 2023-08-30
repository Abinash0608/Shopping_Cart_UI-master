import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Product.model';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';
import { ShareService } from 'src/app/Services/share.service';
@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css']
})
export class AddEditProductsComponent implements OnInit {
  public products:Product[];
   ProductForm = new FormGroup({
    productId: new FormControl(''),
    productName: new FormControl(''),
    price: new FormControl(''),
    productImage: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl('')
  });
  
  submitted=false;
  get productId(){
    return this.ProductForm.get('productId');
  }
  get productName() {
    return this.ProductForm.get('productName');
  }
  get price() {
    return this.ProductForm.get('price');
  }
  get productImage() {
    return this.ProductForm.get('productImage');
  }
  get description(){
    return this.ProductForm.get('description');
  }
  get category(){
    return this.ProductForm.get('category');
  }
  displayStyle = "none";
  constructor( public shared:ShareService,public nav:NavbarServiceService,public fs:FooterService,private router:Router) { }

  ngOnInit(): void {
    this.nav.show();
    this.fs.show();
  }

  EditProduct(){
    
    this.shared.UpdateProduct(this.ProductForm.value).subscribe((result)=>{
  
    });
    alert("Product Edited Successfully");
     
    this.ProductForm.reset();
    this.router.navigate(['login/admin']);
 }
}
