import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/Services/share.service';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';
import Cart from 'src/app/Models/cart.model';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
public order:Cart[];
  constructor(private fs: FooterService, private nav :NavbarServiceService,private shared:ShareService) { }

  ngOnInit(): void {
    this.nav.show();
    this.nav.doSomethingElseUseful;
    this.fs.show();
    this.fs.doSomethingElseUseful();
    this.refreshOrdertList();
  }
   refreshOrdertList(){
   this.shared.GetAllCart().subscribe(data=>{
      this.order=data;
      console.log(this.order)
    });
  }

public grandTotal():number{
  let total : number = 0;
  for(let order of this.order){
    total+= order.quantity* order.price;
  }
  return total;
}
printPurchaseOrder(){
  console.log("Printing PDF");

  let data = document.getElementById("purchaseOrderDiv")!;
  this.generatePDF(data);
}

generatePDF(htmlContent: HTMLElement){
  
  html2canvas(htmlContent).then(canvas => {
    let imgWidth = 290;
    let imgHeigt = (canvas.height * imgWidth / canvas.width)
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jsPDF('l','mm','a4');
    var position = 10;
    pdf.addImage(contentDataURL,'PNG',0,position,imgWidth,imgHeigt);
    pdf.save('PurchaseOrder.pdf');
  })

}
}