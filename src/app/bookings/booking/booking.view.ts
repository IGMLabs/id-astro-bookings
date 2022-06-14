import { Component, Input, OnInit } from '@angular/core';
import { Booking } from 'src/app/core/components/api/booking.interface';

@Component({
  selector: 'app-booking-view',
  templateUrl: './booking.view.html',
  styleUrls: ['./booking.view.css']
})
export class BookingView implements OnInit {

@Input() public booking!:Booking;
@Input() public bookingId:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
