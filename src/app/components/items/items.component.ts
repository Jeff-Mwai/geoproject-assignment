import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
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
  console.log(this.grandTotal)

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
