import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-provider-dashboard',
  templateUrl: './provider-dashboard.component.html',
  styleUrls: ['./provider-dashboard.component.scss']
})
export class ProviderDashboardComponent implements OnInit {

  get user(){
    return this.profile()
  }

  loading: boolean = true

  constructor(private auth: AuthApiService) { }

  ngOnInit(): void {
    if( !this.loading){
      console.log(this.user);
    }
    
  }

  profile(){
    this.auth.account().subscribe(( resp) => {
      console.log( resp);
      this.loading = false
      
    })
  }

}
