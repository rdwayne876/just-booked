import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { ProviderAuthService } from 'src/app/services/provider-auth.service';

@Component({
  selector: 'app-provider-services',
  templateUrl: './provider-services.component.html',
  styleUrls: ['./provider-services.component.scss']
})
export class ProviderServicesComponent implements OnInit {

  constructor( private auth:ProviderAuthService) { }

  user: any = this.auth._authenticatedUser
  
  ngOnInit(): void {
    console.log(this.user);
    
  }





}
