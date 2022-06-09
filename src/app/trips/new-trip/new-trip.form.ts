import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';
import { Trip } from 'src/app/core/api/trip.interface';
import { TripsApi } from 'src/app/core/api/trips.api';
import { CommonService } from 'src/app/core/commons/common.service';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { Form } from 'src/app/core/forms/form.base';

@Component({
  selector: 'app-new-trip-form',
  templateUrl: './new-trip.form.html',
  styleUrls: ['./new-trip.form.css']
})
export class NewTripForm extends Form implements OnInit {
  public start_date = 0;
@Input() public agencies:Agency[]=[];
@Input() public trips:Partial<Trip>[]=[];

@Output() public save=new EventEmitter<Partial<Trip>>();

private tripApi:TripsApi;



  constructor(formBuilder: FormBuilder, public fvs: FormValidationsService,  fms: FormMessagesService, public cms: CommonService, private agenciesApi:AgenciesApi,  tripApi:TripsApi) {
    super(fms);
    this.agencies=agenciesApi.getAll();
    this.trips=tripApi.getAll();
    this.tripApi=tripApi;
    this.form = formBuilder.group({
      agency: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)] ),
      places: new FormControl('', [Validators.required, Validators.min(2), Validators.max(10)] ),
      start_date: new FormControl('', [Validators.required] ),
      end_date: new FormControl('', [Validators.required] ),
      flightPrice: new FormControl('', [Validators.required, Validators.min(1000000), Validators.max(10000000)] ),

    }, {
      validators: [fvs.compareDates]
    });
  }

  private compareDates(form: AbstractControl) : ValidationErrors | null {
    const start = form.get('start_date')?.value;
    const end = form.get('end_date')?.value;
    if (!start || !end) {
      return {
        compareDates: 'No dates provided'
      };
    }
    const start_date = new Date(start);
    const end_date = new Date(end);
    const today = new Date();

    if (today > start_date){
      return {
        compareDates: "You can't travel to the past"
      };
    }
    if (end_date < start_date){
      return {
        compareDates: "Travel to the past it's not posible yet"
      };
    }

    return null;
  }

  public getDatesMessage() {
    const errors = this.form.errors;
    if (!errors) return '';
    if (errors['compareDates']) return errors['compareDates'];
    return;
  }


  public onSubmitClick(){
    const {agency, destination, places, start_date, end_date, flightPrice} = this.form.value;
    const id = this.getDashId(agency + "-" + destination);
    const newTripData = {id, agency, destination, places, start_date, end_date, flightPrice};
    console.warn('Send trip data ', newTripData);
//this.tripApi.post(newTripData);
this.save.emit(newTripData);

  }

  private getDashId(str: string):string {
    return this.cms.getDashId(str);
  }

  ngOnInit(): void {}
}
