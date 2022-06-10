import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';
@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomePage implements OnInit {

  public trips!: Trip[];
  public agencies!: Agency[];
  public error:boolean=false;
  constructor(tripsApi: TripsApi,private agenciesApi: AgenciesApi) {
    tripsApi.getAll$().subscribe((data) => {
      this.trips = data;
    });
    agenciesApi.getAll$().subscribe((data) => {
      this.agencies = data;
    });
   }

  ngOnInit(): void {
  }

  onReload() {
    this.agenciesApi.getAll$().subscribe(
      ( data ) => {
      //this.agencies = data;
      },
      ( err ) => {
        console.log('Fallo', err.message);
        this.error = true;
      }

    );
  }

}
