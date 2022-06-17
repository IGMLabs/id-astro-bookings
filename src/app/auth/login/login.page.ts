import { Component, OnInit } from '@angular/core';
import { AuthAPI } from '../api/auth.api';
import { Login } from '../api/interfaces/login.interface';
import { Register } from '../api/interfaces/register.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  constructor(private authApi:AuthAPI) { }

  ngOnInit(): void {
  }
  onSave(newLogin:Login){
    this.authApi.login$(newLogin).subscribe(() => {});
  }
}

