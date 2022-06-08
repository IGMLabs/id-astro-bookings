import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../core/commons/common.service';
import { FormMessagesService } from '../core/forms/form-messages.service';
import { FormValidationsService } from '../core/forms/form-validations.service';
import { Form } from '../core/forms/form.base';

interface Contact {
  name:string,
  email:string,
  message: string;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.form.html',
  styleUrls: ['./contact.form.css']
})
export class ContactForm extends Form implements OnInit {


  constructor(formBuilder: FormBuilder,  fms: FormMessagesService, public fvs: FormValidationsService, public cms: CommonService) {
    super(fms);
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
      ]),
    });
  }

  ngOnInit(): void {
  }

  public onSave() {
    const contact = this.form.value;
    console.warn('Send Contact message', contact);
  }




}
