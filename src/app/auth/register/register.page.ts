import { Component, OnInit } from '@angular/core';
import { AuthAPI } from '../api/auth.api';
import { Register } from '../api/interfaces/register.interface';

@Component({
  selector: 'app-register-page',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage implements OnInit {

  constructor(private authApi:AuthAPI) { }

  ngOnInit(): void {
  }

  onSave(newRegistry:Register){
    this.authApi.register$(newRegistry).subscribe(() => {});
  }
}
