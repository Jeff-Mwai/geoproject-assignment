import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";
import { ApiCallsService } from 'src/app/services/api-calls.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  allData: any = [];
  itemsData: any;
  todaysDate = new Date;
  amount: any 
  public grandTotal: any;
  totalAmount: any;
  constructor(private service: ApiCallsService) { }

  ngOnInit(): void {
    this.getItemsData();
    this.grandTotal = this.itemsData.reduce((total: any,myItems: any)=> {
    
      //count the items
      total += myItems.amount
      return total
  }, 0)
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('geoProject-invoice.pdf');
    });
  }


  getItemsData(){
    this.service.invoiceData.subscribe(res => {
      this.allData = res
      this.itemsData = this.allData.items
      this.itemsData.forEach((element: any) => {
        Object.assign(element, {amount: element.quantity*element.price});
      });
      console.log("itemsDataaaaa",this.itemsData)
      
    })
  };





   



}
