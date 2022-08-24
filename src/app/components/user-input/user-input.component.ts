import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  userData: any = {};
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  userInfo(){
    console.log(this.userData)
    this.router.navigate(['/items'])
  }
}
