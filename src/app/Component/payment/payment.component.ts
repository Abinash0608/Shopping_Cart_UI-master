import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/Services/share.service';
import {MatIconModule} from '@angular/material/icon';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {Payment} from 'src/app/Models/Payment.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  Paymentform=new FormGroup({

    FullName:new FormControl('', Validators.required),
    transactionAmount:new FormControl('',),
    Cardnumber : new FormControl('',[Validators.required , Validators.minLength(16) , Validators.maxLength(16)]),
    CardCVV : new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(3)]),
    Mode: new FormControl('',),
  });
  submitted=false;
  get FullName() {
    return this.Paymentform.get('Fullname');
  }
  get transactionAmount() {
    return this.Paymentform.get('TransactionAmount');
  }
  get Mode() {
    return this.Paymentform.get('Mode');
  }
  get Cardnumber() {
    return this.Paymentform.get('Cardnumber');
  }
  get CardCVV() {
    return this.Paymentform.get('CardCVV');
  }



  public payment:Payment[];
  readonly APIUrl ="https://localhost:44339"
  constructor(private shared:ShareService, private nav:NavbarServiceService, private fs:FooterService,private router :Router) { }

  ngOnInit(): void {
    this.fs.show();
    this.nav.show();
  }

  onSubmit() {
    this.submitted = true;
    if (this.Paymentform.invalid) {
      return;
  }
  this.shared.addUserDetails(this.Paymentform.value).subscribe((result)=>{
  
});
alert("Payment Successful");
  this.Paymentform.reset();
}
  

}