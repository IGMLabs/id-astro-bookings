import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/core/api/trip.interface';
import { Trips } from 'src/app/core/api/trips.api';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips.list.html',
  styleUrls: ['./trips.list.css'],
})
export class TripsList implements OnInit {

  public reloading = false;
  public tripApi: Partial<Trip>[];
  constructor(tripApi:Trips) {
    this.tripApi=tripApi.getAll();
  }
  public reload(list: string) {
    this.reloading = true;
    console.log('Reloading...' + list);
  }
  public getClassForStatus(status: string |undefined) {
    if (status === 'Confirmed') {
      return 'green';
    }
    return 'orange';
  }

  public getClassForPlaces(places: number|undefined) {
    if (places === 0) return 'sold-out';
    if (places!=undefined&&places < 8) return 'few-places';
    return '';
  }

  ngOnInit(): void {}
}
