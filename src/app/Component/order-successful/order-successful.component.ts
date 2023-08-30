import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-successful',
  templateUrl: './order-successful.component.html',
  styleUrls: ['./order-successful.component.css']
})
export class OrderSuccessfulComponent implements OnInit {

  constructor(private nav:NavbarServiceService, private fs:FooterService,private router:Router) { }

  ngOnInit(): void {
    this.nav.show();
    this.fs.show();
  }
  onLogout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}