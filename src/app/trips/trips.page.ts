import { Component, OnInit } from '@angular/core';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.css']
})
export class TripsPage implements OnInit {
  public reloading = false;
  public trips: Partial<Trip>[]=[];
  constructor(private tripApi:TripsApi) {

  this.trips=this.tripApi.getAll();

   }
   onReload(){
    this.trips=this.tripApi.getAll();
  }
  ngOnInit(): void {
  }

}
