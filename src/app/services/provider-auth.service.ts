import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Provider } from '../models/provider';
import { AuthApiService } from './auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderAuthService {

  private readonly TOKEN_NAME = 'provider_auth'
  private readonly ID = 'id'
  private readonly FIRST_NAME = 'first_name'
  private readonly LAST_NAME = 'last_name'

  private _isLoggedIn$ = new BehaviorSubject<boolean>( false)
  _authenticatedUser: Provider | undefined
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  get token(){
    return localStorage.getItem(this.TOKEN_NAME)
  }

  get id(){
    return localStorage.getItem( this.ID)!
  }

  get firstName(){
    return localStorage.getItem( this.FIRST_NAME)
  }

  get lastName(){
    return localStorage.getItem( this.LAST_NAME)
  }

  constructor(private authApi: AuthApiService) { 
    this._isLoggedIn$.next(!!this.token)
  }

  login(body: object) {
    return this.authApi.login(body).pipe(
      tap(( resp: any) => {
        console.log('provider auth login func');
        console.log(resp);
        this._isLoggedIn$.next( true)
        localStorage.setItem( this.TOKEN_NAME, resp.data.accessToken)
        localStorage.setItem( this.ID, resp.data.provider._id)
        localStorage.setItem( this.FIRST_NAME, resp.data.provider.firstName) 
        localStorage.setItem( this.LAST_NAME, resp.data.provider.lastName)     
      })
    )
  }

  profile(){
    return this.authApi.account().pipe(
      tap(( resp: any) => {
        console.log('provider auth profile func');
        console.log( resp);
        this._authenticatedUser = resp.data.user
        console.log( this._authenticatedUser);
        
      })
    )
  }

}
