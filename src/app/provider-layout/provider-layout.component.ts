import { Component, OnInit } from '@angular/core';
import { ProviderAuthService } from '../services/provider-auth.service';

@Component({
  selector: 'app-provider-layout',
  templateUrl: './provider-layout.component.html',
  styleUrls: ['./provider-layout.component.scss']
})
export class ProviderLayoutComponent implements OnInit {

  constructor(public auth: ProviderAuthService) { }

  ngOnInit(): void {
    this.auth.profile().subscribe(( resp) => console.log('dashborad layout provider auth service call'))
  }

}
