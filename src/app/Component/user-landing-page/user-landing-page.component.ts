import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { ShareService } from 'src/app/Services/share.service';
@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {
 userDetails:any;
 
  constructor(public nav:NavbarServiceService ,public shared:ShareService) {}


  convertToNumberfromstring(value: string | null): number | null
  {
    if (value === null) {
      return null;
    }

    const parsedValue = parseInt(value, 10);

    if (isNaN(parsedValue)) {
      return null;
    }

    return parsedValue;
  }

  ngOnInit(): void {
   this.nav.show();
   let userId : number| null = this.convertToNumberfromstring((sessionStorage.getItem('userId')))
   console.log(userId)
   if(userId !== null){
   this.shared.getUserProfile(userId).subscribe(
    res=>{
     
     this.userDetails=res;
     console.log(this.userDetails);
     console.log(this.userDetails.UserId);
     localStorage.setItem('UserId',JSON.stringify(this.userDetails.UserId));
    },
    err =>{
     console.log(err);
    },
  );
  }
}

}
