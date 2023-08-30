import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/Services/footer.service';
@Component({
  selector: 'sd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public fs: FooterService) { }

  ngOnInit(): void {
    this.fs.show();
    this.fs.doSomethingElseUseful();
  }

}
