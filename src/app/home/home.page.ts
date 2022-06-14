import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AgenciesApi } from '../core/components/api/agencies.api';
import { TripsApi } from '../core/components/api/trips.api';
import { Trip } from '../core/components/api/trip.interface';
import { Agency } from '../core/components/api/agency.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomePage implements OnInit {

  public trips$: Observable<Trip[]>;
  public agencies$: Observable<Agency[]>;

  constructor(tripsApi: TripsApi, agencyApi: AgenciesApi) {
    this.trips$ = tripsApi.getAll$();
    this.agencies$ = agencyApi.getAll$();
  }

  public reloading = false;

  public reload() {
    this.reloading = true;
  }
  ngOnInit(): void {
  }

}
