import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ProviderAuthService } from './services/provider-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderAuthenticatedGuard implements CanActivate {

  constructor( private auth: ProviderAuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isLoggedIn$.pipe(
      tap(( isLoggedIn) => {
        if( !isLoggedIn) {
          this.router.navigate(['login'])
        }
      })
    )
  }
  
}
