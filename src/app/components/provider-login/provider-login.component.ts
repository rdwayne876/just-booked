import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { ProviderAuthService } from 'src/app/services/provider-auth.service';

@Component({
  selector: 'app-provider-login',
  templateUrl: './provider-login.component.html',
  styleUrls: ['./provider-login.component.scss']
})
export class ProviderLoginComponent implements OnInit {

  loginForm = this.fb.group({
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.minLength(8)]], 
    remember : ['']
  })

  constructor( private fb: FormBuilder, private auth: ProviderAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  hide: boolean = true;  

  getErrorMessage(){
    if( this.loginForm.controls['email'].hasError('required')) {
      return "An email address is required"
    }
    return this.loginForm.controls['email'].hasError('email') ? 'Please enter a valid email address' : '';
  }

  submit(){
    this.auth.login( this.loginForm.value).subscribe(( resp) => {
      console.log('provider auth login call');
      
      this.router.navigate(['dashboard'])
    })
  }

}
