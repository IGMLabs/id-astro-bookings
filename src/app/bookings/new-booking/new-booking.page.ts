import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/core/components/api/booking.interface';
import { BookingsApi } from 'src/app/core/components/api/bookings.api';
import { Trip } from 'src/app/core/components/api/trip.interface';
import { TripsApi } from 'src/app/core/components/api/trips.api';

@Component({
  selector: 'app-new-booking-page',
  templateUrl: './new-booking.page.html',
  styleUrls: ['./new-booking.page.css']
})
export class NewBookingPage implements OnInit {

  public trips:Trip[]=[];

  constructor(private bookingsApi:BookingsApi, private router:Router) {

   }

  ngOnInit(): void {
  }
  onSave(newBookingData:Booking){
    this.bookingsApi.post$(newBookingData).subscribe(() => {});
    this.router.navigate(['/bookings']);
  }
}
