import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { StorageBase } from 'src/app/core/utils/storage.base';
import { environment } from 'src/environments/environment';
import { AuthResponse } from './interfaces/auth.response.interface';
import { Login } from './interfaces/login.interface';
import { Register } from './interfaces/register.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthAPI {
  private url = environment.apiUrl;

  public accessToken = '';

  constructor(protected http: HttpClient, private storage: StorageBase) {
    this.accessToken = storage.getToken();
    this.storage.setToken(this.accessToken);
  }

  public register$(register: Register) {
    console.log('asdf');
    return this.http
      .post<AuthResponse>(this.url + 'auth/registration', register)
      .pipe(
        tap((response) => {
          this.accessToken = response.accessToken;
          console.log('TOKEN: ' + this.accessToken);
          this.storage.setToken(this.accessToken);
        })
      );
  }

  public login$(login: Login) {
    console.log('qwer');

    return this.http.post<AuthResponse>(this.url + 'auth/login', login).pipe(
      tap((response) => {
        this.accessToken = response.accessToken;
        console.log('TOKEN: ' + this.accessToken);
        this.storage.setToken(this.accessToken);
      })
    );
  }
}
