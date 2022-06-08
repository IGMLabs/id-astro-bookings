import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/app/core/api/trip.interface';
import { Trips } from 'src/app/core/api/trips.api';


@Component({
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.css'],
})
export class TripPage implements OnInit {
  public tripId = '';
  public trip?:Partial<Trip>;
  constructor(private route: ActivatedRoute, tripApi:Trips) {
    this.tripId = this.route.snapshot.paramMap.get('id') || '';
    this.trip=tripApi.getById(this.tripId);

  }

  ngOnInit(): void {

  }
}
