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

  /**
   * Create the user service
   * @param body posted form data
   * @returns json with created service
   */
  public create( body: object): Observable<ProviderService> {
    return this.http.post<ProviderService>( this.REST_API_SERVER, body, this.HTTP_HEADER)
  }

  /**
   * return one service
   * @param id used to locate the specified record
   * @returns returns the found resource
   */
  public findOne( id: string): Observable<ProviderService> {
    return this.http.get<ProviderService>( `${this.REST_API_SERVER}${id}`, this.HTTP_HEADER)
  }

  /**
   * Update a service
   * @param id id used to locate the specified service
   * @param body posted form data
   * @returns the updated servcie
   */
  public update( id: string, body:object): Observable<ProviderService> {
    return this.http.patch<ProviderService>(`${this.REST_API_SERVER}${id}`, body, this.HTTP_HEADER)
  }

}
