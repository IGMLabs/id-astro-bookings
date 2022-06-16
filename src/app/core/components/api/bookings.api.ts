import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { CrudApi } from './crud.api';
import { StatusStore } from './status.store';
import { Booking } from "./booking.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingsApi extends CrudApi<Booking> {
  constructor(http: HttpClient,statusStore:StatusStore) {
    super(http, 'bookings',statusStore);
  }

  public getByText$(text: string | null): Observable<Booking[]> {
    if (text === null || text == '') return this.getAll$();
    return this.http.get<Booking[]>(this.url + '?q=' + text); // .pipe(delay(3000));
  }


}
