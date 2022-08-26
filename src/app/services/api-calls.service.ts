import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  private invoice = new BehaviorSubject<any>([])
  invoiceData = this.invoice.asObservable()
  public itemList: any = [];
  constructor() { }
  getInvoiceData(data: any) {
     this.invoice.next(data)
  };

  setItem(item: any){
    this.itemList.push(...item);
    this.invoice.next(item);
  };

  addItem(item: any) {
    this.itemList.push(item);
    this.invoice.next(this.itemList);
    
    console.log(this.itemList)
  };
  
  // getTotalPrice() :number{
  //   let grandTotal = 0;
  //   this.itemList.map((item: any)=> {
  //     grandTotal += item.amount
  //   })
  //   return grandTotal
  // };

 
  // getTotalPrice(): number{

  //   let grandTotal = 0;
  //   grandTotal = this.itemList.reduce((accumulator: any, a: any) => {

  //     return accumulator + a.amount;

  //   },0);

  //   return grandTotal;

  // }  
 }
