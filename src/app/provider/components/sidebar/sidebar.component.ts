import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDrawer } from '@angular/material/sidenav';
import { ProviderAuthService } from 'src/app/services/provider-auth.service';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor( private auth: ProviderAuthService) { }

  first_name = this.auth.firstName
  last_name = this.auth.lastName

  ngOnInit(): void {
  }

}
