import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Booking } from 'src/app/core/components/api/booking.interface';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings.list.html',
  styleUrls: ['./bookings.list.css']
})
export class BookingsList implements OnInit {
  @Input() public bookings: Booking[]=[];
  @Output() private reload = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public getBookingsLength() {
    return this.bookings.length;
  }

  public onReloadClick() {
    this.reload.emit();
  }

}
