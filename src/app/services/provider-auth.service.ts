import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthApiService } from './auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderAuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>( false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  constructor(private authApi: AuthApiService) { 
    const token = localStorage.getItem( 'provider_auth')
    this._isLoggedIn$.next(!!token)
  }

  login(body: object) {
    return this.authApi.login(body).pipe(
      tap(( resp: any) => {
        this._isLoggedIn$.next( true)
        localStorage.setItem( 'provider_auth', resp.data.accessToken)        
      })
    )
  }
}
