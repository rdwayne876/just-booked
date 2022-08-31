import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDrawer } from '@angular/material/sidenav';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }

}
