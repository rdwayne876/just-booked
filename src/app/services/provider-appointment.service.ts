import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class ProviderAppointmentService {

  private REST_API_SERVER = 'http://localhost:3000/api/v1/appointments/'

  private HTTP_HEADER = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor( private http: HttpClient) { }

  updateAppointment( id: string, body:object): Observable<Appointment>{
    return this.http.patch<Appointment>( `${this.REST_API_SERVER}${id}`, body, this.HTTP_HEADER)
  }
}
