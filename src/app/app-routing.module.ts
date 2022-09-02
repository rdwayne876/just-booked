import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderAppointmentsComponent } from './components/provider-appointments/provider-appointments.component';
import { ProviderDashboardComponent } from './components/provider-dashboard/provider-dashboard.component';
import { ProviderProfileComponent } from './components/provider-profile/provider-profile.component';
import { ProviderReviewsComponent } from './components/provider-reviews/provider-reviews.component';
import { ProviderServicesAddComponent } from './components/provider-services-add/provider-services-add.component';
import { ProviderServicesRouterComponent } from './components/provider-services-router/provider-services-router.component';
import { ProviderServicesComponent } from './components/provider-services/provider-services.component';
import { ProviderAuthLayoutComponent } from './provider-auth-layout/provider-auth-layout.component';
import { ProviderAuthenticatedGuard } from './provider-authenticated.guard';
import { ProviderLayoutComponent } from './provider-layout/provider-layout.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'dashboard'
  },
  {
    path: 'login', component: ProviderAuthLayoutComponent
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
        component: ProviderServicesRouterComponent,
        children: [
          {
            path: '',
            component: ProviderServicesComponent
          },
          {
            path: 'add',
            component: ProviderServicesAddComponent
          }
        ]
      },
      {
        path: 'reviews',
        component: ProviderReviewsComponent
      },
      {
        path: 'profile',
        component: ProviderProfileComponent
      }
    ],
    canActivate: [ProviderAuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
