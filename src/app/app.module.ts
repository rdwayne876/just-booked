import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './provider/components/navbar/navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule, MatDrawer} from '@angular/material/sidenav';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


import { SidebarComponent } from './provider/components/sidebar/sidebar.component';
import { DashboardComponent } from './provider/pages/dashboard/dashboard.component';
import { SidenavService } from './provider/services/sidenav.service';
import { ProviderLayoutComponent } from './provider-layout/provider-layout.component';
import { ProviderDashboardComponent } from './components/provider-dashboard/provider-dashboard.component';
import { ProviderAppointmentsComponent } from './components/provider-appointments/provider-appointments.component';
import { ProviderServicesComponent } from './components/provider-services/provider-services.component';
import { ProviderReviewsComponent } from './components/provider-reviews/provider-reviews.component';
import { ProviderProfileComponent } from './components/provider-profile/provider-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    ProviderLayoutComponent,
    ProviderDashboardComponent,
    ProviderAppointmentsComponent,
    ProviderServicesComponent,
    ProviderReviewsComponent,
    ProviderProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [
    {
      provide: MatDrawer,
      useValue: {}
    },
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
