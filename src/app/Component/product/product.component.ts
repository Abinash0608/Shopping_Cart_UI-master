import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product.model';
import { ShareService } from 'src/app/Services/share.service';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';
import Cart from 'src/app/Models/cart.model';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 public products: Product[] ;
 
  constructor(private service:ShareService,private nav :NavbarServiceService ,private fs :FooterService) { }

  ngOnInit(): void {
    this.refreshProductList();
    this.nav.show();
    //this.nav.hide();
    this.nav.doSomethingElseUseful();
    this.fs.show();
    this.fs.doSomethingElseUseful(); 
  }
  refreshProductList(){
    this.service.GetAllProduct().subscribe(data=>{
      this.products=data;
      console.log(this.products)
    });
  }
 
  addToCart(products:Product){
    
    console.log(products);
    
      this.service.addToCart(products).subscribe(val=>{
        
      });
      alert("Added to Cart!");
    }
}
