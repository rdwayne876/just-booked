import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-provider-dashboard',
  templateUrl: './provider-dashboard.component.html',
  styleUrls: ['./provider-dashboard.component.scss']
})
export class ProviderDashboardComponent implements OnInit {

  user: any
  
  loading: boolean = true

  constructor(private auth: AuthApiService) { }

  ngOnInit(): void {

    this.profile()
    
    

  }

  profile() {
    this.auth.account().subscribe((resp) => this.user = resp)
  }

  pendingCount(): number{
    return this.user.data.user.appointments.filter(( obj:any ) => obj.confirmed === false && new Date (obj.date) > new Date ).length
  }

  upcomingCount(): number{
    return this.user.data.user.appointments.filter(( obj:any ) => obj.confirmed === true && new Date (obj.date) > new Date ).length
  }

}
