import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProviderService } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ProviderServicesService {

  private REST_API_SERVER = 'http://localhost:3000/api/v1/services/'

  private HTTP_HEADER = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor( private http: HttpClient) { }

  public create( body: object): Observable<ProviderService> {
    return this.http.post<ProviderService>( this.REST_API_SERVER, body, this.HTTP_HEADER)
  }
}
