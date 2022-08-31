import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderAppointmentsComponent } from './components/provider-appointments/provider-appointments.component';
import { ProviderDashboardComponent } from './components/provider-dashboard/provider-dashboard.component';
import { ProviderProfileComponent } from './components/provider-profile/provider-profile.component';
import { ProviderReviewsComponent } from './components/provider-reviews/provider-reviews.component';
import { ProviderServicesComponent } from './components/provider-services/provider-services.component';
import { ProviderLayoutComponent } from './provider-layout/provider-layout.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: ProviderLayoutComponent,
    children: [
      {
        path: '',
        component: ProviderDashboardComponent
      },
      {
        path: 'appointments',
        component: ProviderAppointmentsComponent
      },
      {
        path: 'services',
        component: ProviderServicesComponent
      },
      {
        path: 'reviews',
        component: ProviderReviewsComponent
      },
      {
        path: 'profile',
        component: ProviderProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
