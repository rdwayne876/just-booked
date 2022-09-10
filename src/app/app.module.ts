import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarUtilsModule } from './calendar-utils/module';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'
import { FlatpickrModule } from 'angularx-flatpickr';

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
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { NavbarComponent } from './provider/components/navbar/navbar.component';
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
import { ProviderServicesEditComponent } from './components/provider-services-edit/provider-services-edit.component';
import { ProviderAppointmentsDialogComponent } from './components/provider-appointments-dialog/provider-appointments-dialog.component';
import { DatePickrComponent } from './components/date-pickr/date-pickr.component';
import { LandingPageComponent } from './website/components/landing-page/landing-page.component';
import { WebNavbarComponent } from './website/components/web-navbar/web-navbar.component';
import { WebBannerComponent } from './website/components/web-banner/web-banner.component';
import { FooterComponent } from './website/components/footer/footer.component';
import { WebSearchComponent } from './website/components/web-search/web-search.component';
import { WebSearchResultsComponent } from './website/components/web-search-results/web-search-results.component';




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
    ProviderServicesEditComponent,
    ProviderAppointmentsDialogComponent,
    DatePickrComponent,
    LandingPageComponent,
    WebNavbarComponent,
    WebBannerComponent,
    FooterComponent,
    WebSearchComponent,
    WebSearchResultsComponent,
    
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
    MatProgressSpinnerModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CalendarUtilsModule,
    MatTabsModule,
    MatDialogModule,
    FlatpickrModule.forRoot(),
    FormsModule
  ],
  providers: [
    ProviderAuthInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
