import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error)=>{
       return this.handleError(error);
      })
    );
  }

  private handleError(error:any):Observable<any>{

    const httpError=error as HttpErrorResponse;
    if(httpError){
      if(httpError.error.status===401 || httpError.status===403){
        console.log('Security error');
        this.router.navigate(['/','auth/login']);
      }else{
        if(httpError.status===0||httpError.status>=500){
          console.log('Server error')
        }else{
          console.log('User error')
        }
      }
    }else{console.log('💣application error');}
    return throwError(()=>error);


  }

}
