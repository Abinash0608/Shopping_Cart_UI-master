import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import{ShareService} from 'src/app/Services/share.service';
import { feedback } from 'src/app/Models/feedback.model';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  Feedbackform = new FormGroup({
    
    Username : new FormControl('',),
    Feedback:new FormControl('',)
    
  });
  submitted=false;
  public feedbacks:feedback[];
  get username() {
    return this.Feedbackform.get('Username');
  }
  get feedback() {
    return this.Feedbackform.get('Feedback');
  }
  
  constructor(public nav: NavbarServiceService,private shared:ShareService) { }

  ngOnInit(): void {
    this.nav.show()
    this.nav.doSomethingElseUseful()
    
  }

  onSubmit() {
    this.submitted = true;
    if (this.Feedbackform.invalid) {
      return;
    
    }
    
  this.shared.addFeedDetails(this.Feedbackform.value).subscribe((result)=>{
   
});
  location.reload();
}


}