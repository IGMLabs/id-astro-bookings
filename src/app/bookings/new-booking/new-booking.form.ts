import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Booking } from 'src/app/core/components/api/booking.interface';
import { BookingsApi } from 'src/app/core/components/api/bookings.api';
import { Trip } from 'src/app/core/components/api/trip.interface';
import { TripsApi } from 'src/app/core/components/api/trips.api';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { FormBase } from 'src/app/core/forms/form.base';

@Component({
  selector: 'app-new-booking-form',
  templateUrl: './new-booking.form.html',
  styleUrls: ['./new-booking.form.css']
})
export class NewBookingForm extends FormBase implements OnInit {
  @Input() public trips:Trip[]=[];
  @Output() public save = new EventEmitter<Booking>();
  constructor(
    formBuilder: FormBuilder,
    private fvs: FormValidationsService,
    fms: FormMessagesService,
    private tripsApi:TripsApi,
    private bookingsApi: BookingsApi
  ) {
    super(fms)
    this.form = formBuilder.group(
      {
        //id: new FormControl('', [Validators.required, Validators.minLength(2)]),
        tripId: new FormControl('', [Validators.required]),
        passengerName: new FormControl(),
        date: new FormControl('', [Validators.required]),
        luggageKilos: new FormControl('', [Validators.required]),
        hasPremiumFoodPrice: new FormControl(false)
      }
    );
    tripsApi.getAll$().subscribe((trips)=>this.trips=trips);
  }

  ngOnInit(): void {
  }
  private getDashId(str: string): string {
    return str.toLocaleLowerCase().replace(/ /g, '-');
  }

  public onSubmitClick() {
    const { tripId, passengerName,date,luggageKilos,hasPremiumFoodPrice } = this.form.value;
    const id = this.getDashId(tripId+date+passengerName);
    const newBookingData = { id, tripId, passengerName, date, luggageKilos, hasPremiumFoodPrice };
    this.save.emit(newBookingData);

  }
}
