import { Component, OnInit } from '@angular/core';
import { AuthApi } from '../api/auth.api';
import { Register } from '../api/interfaces/register.interface';

@Component({
  selector: 'app-register-page',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage implements OnInit {

  constructor(private authApi:AuthApi<Register>) { }

  ngOnInit(): void {
  }

  onSave(newRegistry:Register){
    this.authApi.post$(newRegistry).subscribe(() => {});
  }
}
