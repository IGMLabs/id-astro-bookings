import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Booking } from '../core/components/api/booking.interface';
import { BookingsApi } from '../core/components/api/bookings.api';

@Component({
  selector: 'app-bookings-page',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.css']
})
export class BookingsPage {

  public bookings$:Observable<Booking[]>;
  public error: boolean = false;
  private search$: BehaviorSubject<string>=new BehaviorSubject('');

  constructor(private bookingsApi: BookingsApi) {
    this.bookings$ = this.search$.pipe(
      switchMap((searchTerm) => this.bookingsApi.getByText$(searchTerm))
    );
  }


   onReload() {
    this.bookingsApi.getAll$().subscribe(
      (data) => {
        //this.agencies = data
      },
      (err) => {
        console.log('hay un fallo');
        this.error = true;
      });
  }

  onSearch(searchTerm:string){
    this.search$.next(searchTerm);
    //this.agencies$ = this.agenciesApi.getByText$(searchTerm)
  }

}
