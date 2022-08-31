import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProviderAuthService } from './services/provider-auth.service';

@Injectable()
export class ProviderAuthInterceptor implements HttpInterceptor {

  constructor( private auth: ProviderAuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      headers: request.headers.set('authorization', `Bearer ${this.auth.token}`),
    });
    
    return next.handle(request);
  }
}

export const ProviderAuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ProviderAuthInterceptor,
  multi: true
}