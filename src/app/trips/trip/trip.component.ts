import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  public tripId: string;

  constructor(route: ActivatedRoute) {
    this.tripId=route.snapshot.paramMap.get('id') || '';
  }
  ngOnInit(): void {
  }

}
