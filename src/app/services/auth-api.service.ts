import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../models/provider';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  //server url
  private REST_API_SERVER = 'http://localhost:3000/api/v1/auth'

  //request headers
  private HTTP_HEADER = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor( private http: HttpClient) { }

  /**
   * Authenticate user
   * @param body submitted form Data
   * @returns authenticated user
   */
  public login(  body: any): Observable<Provider>{
    return this.http.post<Provider>( `${this.REST_API_SERVER}/login`, body, this.HTTP_HEADER)
  }
}
