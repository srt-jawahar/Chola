import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('accessToken');
    if(token){
      const clonedReq = request.clone({
        headers: request.headers.set('Authorization', token),
      });
      return next.handle(clonedReq);
    }else {
      return next.handle(request);
    }
   
  }
}
