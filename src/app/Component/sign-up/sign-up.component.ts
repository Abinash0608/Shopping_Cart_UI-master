import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ShareService } from 'src/app/Services/share.service';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/Models/UserDetails.model';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  SignUpform = new FormGroup({
    Role: new FormControl('', Validators.required),
    FirstName : new FormControl('', Validators.required),
    LastName : new FormControl,
    EmailId : new FormControl('',[Validators.required , Validators.email]),
    MobileNumber : new FormControl('' , [Validators.required , Validators.minLength(10) , Validators.maxLength(10)]),
    AddressInfo : new FormControl('',Validators.required),
    City : new FormControl('',Validators.required),
    UserState : new FormControl('',Validators.required),
    Pincode: new FormControl('' , [Validators.required , Validators.minLength(6) , Validators.maxLength(6)]),
    Password : new FormControl('',Validators.required)
    
  });
  submitted=false;
  get Role() {
    return this.SignUpform.get('Role');
  }
  get FirstName() {
    return this.SignUpform.get('FirstName');
  }
  get LastName() {
    return this.SignUpform.get('LastName');
  }
  get EmailId() {
    return this.SignUpform.get('EmailId');
  }
  get MobileNumber() {
    return this.SignUpform.get('MobileNumber');
  }
  get AddressInfo(){
    return this.SignUpform.get('AddressInfo'); 
  }
  get City(){
    return this.SignUpform.get('City'); 
  }
  get UserState(){
    return this.SignUpform.get('UserState'); 
  }
  get Pincode(){
    return this.SignUpform.get('Pincode'); 
  }
  get Password() {
    return this.SignUpform.get('Password');
  }


  constructor(private shared:ShareService, private nav:NavbarServiceService, private fs:FooterService,private router :Router) { }

  ngOnInit(): void {
    this.fs.hide();
  }

  onSubmit() {
    this.submitted = true;
    if (this.SignUpform.invalid) {
      return;
  }
  this.shared.addUserDetails(this.SignUpform.value).subscribe((result)=>{
  
});
this.shared.EmailService(this.SignUpform.value.FirstName,this.SignUpform.value.EmailId).subscribe((res)=>{ })
 alert("Sign Up Successful");
  this.SignUpform.reset();
  this.router.navigate(['login']);
}

}
