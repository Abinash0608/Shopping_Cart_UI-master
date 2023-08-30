import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private nav :NavbarServiceService ,private fs:FooterService) { }

  ngOnInit(): void {
    this.nav.show();
   this.nav.doSomethingElseUseful();
   this.fs.show();
   this.fs.doSomethingElseUseful();
  }

}
