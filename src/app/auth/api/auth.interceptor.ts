import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthApi } from './auth.api';
import { Login } from './interfaces/login.interface';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authApi:AuthApi<Login>) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken=this.authApi.accessToken;
    if(accessToken===''){
          return next.handle(request);
    }else{

      request=request.clone({
        setHeaders:{
          Authorization:`Bearer ${accessToken}`,
        },
      });
      return next.handle(request);

    }
  }
}
