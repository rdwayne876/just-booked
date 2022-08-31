import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthApiService } from './auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderAuthService {

  private readonly TOKEN_NAME = 'provider_auth'
  private _isLoggedIn$ = new BehaviorSubject<boolean>( false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  get token(){
    return localStorage.getItem(this.TOKEN_NAME)
  }

  constructor(private authApi: AuthApiService) { 
    this._isLoggedIn$.next(!!this.token)
  }

  login(body: object) {
    return this.authApi.login(body).pipe(
      tap(( resp: any) => {
        this._isLoggedIn$.next( true)
        localStorage.setItem( this.TOKEN_NAME, resp.data.accessToken)        
      })
    )
  }
}
