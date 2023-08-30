import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { ShareService } from 'src/app/Services/share.service';
import { feedback } from 'src/app/Models/feedback.model';
import { FooterService } from 'src/app/Services/footer.service';
@Component({
  selector: 'app-allfeedbacks',
  templateUrl: './allfeedbacks.component.html',
  styleUrls: ['./allfeedbacks.component.css']
})
export class AllfeedbacksComponent implements OnInit {

  public feedback:feedback[];
  constructor(public nav: NavbarServiceService,private shared:ShareService,public fs: FooterService) { }

  ngOnInit(): void {
    this.nav.show();
   this.nav.doSomethingElseUseful();
   this.fs.show();
   this.fs.doSomethingElseUseful();
    this.refreshFeedList();
  }
  refreshFeedList(){
    this.shared.GetAllFeedDetails().subscribe(data=>{
      this.feedback=data;
      console.log(this.feedback)
    });
  }
}
