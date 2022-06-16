import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripsApi } from '../core/components/api/trips.api';
import { Trip } from '../core/components/api/trip.interface';
import { BehaviorSubject, Observable, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-trips-page',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.css']
})
export class TripsPage implements OnInit {

  public trips$: Observable<Trip[]>;
  private search$: BehaviorSubject<string>=new BehaviorSubject('');

  constructor( private tripsApi: TripsApi) {
    this.trips$ = this.search$.pipe(
      switchMap((searchTerm) => this.tripsApi.getByText$(searchTerm))
    );
  }


  onReload(){
    this.trips$ = this.tripsApi.getAll$();
  }

  ngOnInit(): void {
  }
  onSearch(searchTerm:string){
    this.search$.next(searchTerm);
    //this.agencies$ = this.agenciesApi.getByText$(searchTerm)
  }
}
