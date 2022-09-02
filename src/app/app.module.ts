import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { SidebarComponent } from './provider/components/sidebar/sidebar.component';
import { DashboardComponent } from './provider/pages/dashboard/dashboard.component';
import { ProviderLayoutComponent } from './provider-layout/provider-layout.component';
import { ProviderDashboardComponent } from './components/provider-dashboard/provider-dashboard.component';
import { ProviderAppointmentsComponent } from './components/provider-appointments/provider-appointments.component';
import { ProviderServicesComponent } from './components/provider-services/provider-services.component';
import { ProviderReviewsComponent } from './components/provider-reviews/provider-reviews.component';
import { ProviderProfileComponent } from './components/provider-profile/provider-profile.component';
import { ProviderLoginComponent } from './components/provider-login/provider-login.component';
import { ProviderAuthLayoutComponent } from './provider-auth-layout/provider-auth-layout.component';
import { ProviderRegisterComponent } from './components/provider-register/provider-register.component';
import { ProviderAuthInterceptorProvider } from './provider-auth.interceptor';
import { ProviderServicesRouterComponent } from './components/provider-services-router/provider-services-router.component';
import { ProviderServicesAddComponent } from './components/provider-services-add/provider-services-add.component';




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
    ProviderLoginComponent,
    ProviderAuthLayoutComponent,
    ProviderRegisterComponent,
    ProviderServicesRouterComponent,
    ProviderServicesAddComponent,
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
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  providers: [
    ProviderAuthInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
