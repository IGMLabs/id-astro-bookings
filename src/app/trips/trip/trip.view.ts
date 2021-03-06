import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../../core/components/api/trip.interface';

@Component({
  selector: 'app-trip-view',
  templateUrl: './trip.view.html',
  styleUrls: ['./trip.view.css']
})
export class TripView implements OnInit {

  @Input()  public tripId!:string;
  @Input() public trip?: Trip;

  constructor() { }

  ngOnInit(): void {
  }

}
