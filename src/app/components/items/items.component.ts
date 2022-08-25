import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  allData: any = [];
  itemsData: any;
  todaysDate = new Date 
  constructor(private service: ApiCallsService) { }

  ngOnInit(): void {
    this.getItemsData()
  }
  getItemsData(){
    this.service.invoiceData.subscribe(res => {
      this.allData = res
      this.itemsData = this.allData.items
      console.log("second component", this.itemsData)
    })
  }

}
