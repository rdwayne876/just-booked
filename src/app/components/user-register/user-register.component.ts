import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  // registerForm: new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // })

  constructor() { }

  ngOnInit(): void {
  }

}
