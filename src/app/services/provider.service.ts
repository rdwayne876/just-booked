import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private REST_API_SERVER = 'http://localhost:3000/api/v1/providers/'

  private HTTP_HEADER = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor( private http: HttpClient) { }

  public getAppointments( id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.REST_API_SERVER}${id}/appointments`, this.HTTP_HEADER).pipe(
      tap( resp => { console.log(resp);
      })
    )
  }
}
