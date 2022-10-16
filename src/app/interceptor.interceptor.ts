import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({setHeaders: {apiKey: environment.apiKey}})
    return httpHandler.handle(request)
  }
}
