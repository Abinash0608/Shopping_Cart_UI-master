import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private nav:NavbarServiceService, private fs:FooterService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.fs.hide();
  }

}
