import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  private invoice = new BehaviorSubject<any>([])
  invoiceData = this.invoice.asObservable()
  constructor() { }
  getInvoiceData(data: any) {
     this.invoice.next(data)
  };
}
