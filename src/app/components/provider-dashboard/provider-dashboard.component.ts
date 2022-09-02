import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { ProviderAuthService } from 'src/app/services/provider-auth.service';

@Component({
  selector: 'app-provider-dashboard',
  templateUrl: './provider-dashboard.component.html',
  styleUrls: ['./provider-dashboard.component.scss']
})
export class ProviderDashboardComponent implements OnInit {

  user: any
  
  loading: boolean = true

  constructor(private auth: AuthApiService, private pauth: ProviderAuthService) { }

  ngOnInit(): void {

    this.profile()

    this.pauth.profile().subscribe(( resp) => console.log('success'))

  }

  profile() {
    this.auth.account().subscribe((resp: any) => this.user = resp.data.user)
  }

  pendingCount(): number{
    return this.user.appointments.filter(( obj:any ) => obj.confirmed === false && new Date (obj.date) > new Date ).length
  }

  upcomingCount(): number{
    return this.user.appointments.filter(( obj:any ) => obj.confirmed === false && new Date (obj.date) > new Date ).length
  }

}
