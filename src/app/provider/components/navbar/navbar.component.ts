import { Component, Inject, OnInit } from '@angular/core';
import { Provider } from 'src/app/models/provider';
import { ProviderAuthService } from 'src/app/services/provider-auth.service';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private auth: ProviderAuthService) { }

  first_name = this.auth.firstName
  last_name = this.auth.lastName

  ngOnInit(): void {
  }

}
