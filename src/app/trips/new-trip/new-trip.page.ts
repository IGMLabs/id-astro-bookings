import { Component, OnInit } from '@angular/core';
import { Agency } from '../../core/components/api/agency.interface';
import { TripsApi } from '../../core/components/api/trips.api';
import { AgenciesApi } from '../../core/components/api/agencies.api';
import { Trip } from '../../core/components/api/trip.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.page.html',
  styleUrls: ['./new-trip.page.css']
})
export class NewTripPage implements OnInit {

  public agencies$ : Observable<Agency[]>;

  constructor(private tripsApi : TripsApi,agencyApi : AgenciesApi) {
    this.agencies$ = agencyApi.getAll$();
  }

  ngOnInit(): void {
  }

  onSave(newAgencyData:Trip){
    this.tripsApi.post$(newAgencyData).subscribe();
  }

}
