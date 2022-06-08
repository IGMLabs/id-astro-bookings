import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CommonService } from 'src/app/core/commons/common.service';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { Form } from 'src/app/core/forms/form.base';


interface Register {
  name:string,
  email:string,
  message: string;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css']
})
export class RegisterForm extends Form implements OnInit {



  constructor(formBuilder: FormBuilder, fms: FormMessagesService, public fvs: FormValidationsService, public cms: CommonService) {
   super(fms);
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      acceptTerms: new FormControl(false, [Validators.requiredTrue]),
    },
    {
      validators: [fvs.passwordMatch]
    }

    );
  }

  ngOnInit(): void {
  }

  public onSave() {
    const {name, email, password} = this.form.value;
    const register = {name, email, password}
    console.warn('Send Regsiter', register);
  }

  public getPasswordMessage() {
    const errors = this.form.errors;
    if (!errors) return  '';
    if (errors['passwordMatch']) return errors['passWordMatch'];
    return '';
  }





}
