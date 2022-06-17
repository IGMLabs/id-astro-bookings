import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, pipe, tap } from 'rxjs';
import { StatusStore } from 'src/app/core/components/api/status.store';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export  class AuthApiOld<ApiType> {
  private endPoint:string="register";
  public url = environment.apiUrl + this.endPoint + '/';

public accessToken='';

  private statusPipe = pipe(
    tap(() => this.notifyIdle()),
    catchError((err) => {
      this.notifyError(err.message)
      return of(err)
    })
  )
  constructor(public http: HttpClient,  protected statusStore: StatusStore) { }

  public post$(payload: Partial<ApiType>) {
    this.notifyWorking();
    return this.http.post<ApiType>(this.url, payload).pipe(this.statusPipe);
  }
  public post2$(payload: Partial<ApiType>) {
    this.url=environment.apiUrl+"login";
    this.notifyWorking();
    return this.http.post<any>(this.url, payload).pipe(tap(response=>this.accessToken=response.accessToken));
  }

  private notifyIdle() {
    this.statusStore.setState({ isWorking: false, errorMessage: '' });
  }

  private notifyError(message: string) {
    this.statusStore.setState({ isWorking: false, errorMessage: message });
  }

  private notifyWorking() {
    this.statusStore.setState({ isWorking: true, errorMessage: '' })
  }
}
