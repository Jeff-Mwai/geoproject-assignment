import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  userData: any = {};
  invoiceForm: any;
  formData: any = [];
  data: any;
  myData: any;
  

  constructor(private router:Router , private fb: FormBuilder, private service: ApiCallsService) { }

  ngOnInit(): void {
    this.invoiceForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      date: ['', Validators.required],
      items: this.fb.array([
        this.addItemsFormGroup()
      ]),
      
      
    })
    // this.addItemsFormGroup();

this.service.invoiceData.subscribe(res => {
  this.data = res
})

  }
 
  addItemsBtnClick(): void{
    (<FormArray>this.invoiceForm.get('items')).push(this.addItemsFormGroup())
  }
  addItemsFormGroup(): FormGroup{
    return this.fb.group({
      item: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
    })
  }

  onSubmit(){
    this.service.getInvoiceData(this.invoiceForm.value )
    this.router.navigate(['/items'])
  }



}
