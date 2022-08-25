import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  userData: any = {};
  invoiceForm: any;
  



  constructor(private router:Router , private fb: FormBuilder) { }

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
    this.addItemsFormGroup();
  }
  userInfo(){
    console.log(this.userData)
    this.router.navigate(['/items'])
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
    console.log(this.invoiceForm.value)
  }



}
