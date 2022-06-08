import { computeMsgId } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { IdNameApi } from 'src/app/core/api/id-name.api';
import { IdName } from 'src/app/core/api/id-name.interface';
import { CommonService } from 'src/app/core/commons/common.service';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { Form } from 'src/app/core/forms/form.base';

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.css'],
})
export class NewAgencyForm extends Form implements OnInit {
  public ranges:IdName[];
  public statuses  ;
  private agenciesApi:AgenciesApi;

  constructor(public formBuilder: FormBuilder,  fms: FormMessagesService, public fvs: FormValidationsService, public cms: CommonService,idNameApi:IdNameApi,agenciesApi:AgenciesApi) {
    super(fms);
    this.ranges=idNameApi.getRanges();
    this.statuses=idNameApi.getStatuses();
    this.agenciesApi=agenciesApi;
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      range: new FormControl('', [Validators.required]),
      status: new FormControl(this.statuses[0]),

    });

  }

  public onSubmitClick() {
    const { name, range, status } = this.form.value;
    const id = this.getDashId(name);
    const newAgencyData = { id, name, range, status };
    console.warn('Send agency data ', newAgencyData);
    this.agenciesApi.post(newAgencyData);
  }

  private getDashId(str: string): string {
    return this.cms.getDashId(str);
  }


  ngOnInit(): void {}
}
