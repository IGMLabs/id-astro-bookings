import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/app/core/api/trip.interface';
import { TripsApi } from 'src/app/core/api/trips.api';


@Component({
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.css'],
})
export class TripPage implements OnInit {
  public tripId = '';
  public trip?:Partial<Trip>;

  public reloading = false;
  public tripApi: Partial<Trip>[]=[];


  constructor(private route: ActivatedRoute, tripApi:TripsApi) {
    this.tripId = this.route.snapshot.paramMap.get('id') || '';
    this.trip=tripApi.getById(this.tripId);

  }

  ngOnInit(): void {

  }
}
