import { Component, OnInit } from '@angular/core';
import { Agency } from '../core/components/api/agency.interface';
import { AgenciesApi } from '../core/components/api/agencies.api';
import { BehaviorSubject, catchError, concatMap, exhaustMap, map, Observable, Subject, switchMap } from 'rxjs';
import { Trip } from '../core/components/api/trip.interface';
import { ActivatedRoute } from '@angular/router';
import { TripsApi } from '../core/components/api/trips.api';

@Component({
  selector: 'app-agencies-page',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css']
})
export class AgenciesPage {

  //public agencies!: Agency[];
  public agencies$: Observable<Agency[]>;
  public error: boolean = false;
  public trips$!: Observable<Trip[]>|null;
  //private search$: Subject<string>=new Subject();
private search$: BehaviorSubject<string>=new BehaviorSubject('');
  // private subscriptor = {
  //   next: (data:Agency[]) => {
  //     //this.agencies = data;
  //   },
  //   error: (err:Error) => {
  //     console.log('hay un fallo',err.message);
  //     this.error = true;
  //   }
  // }

  constructor(private agenciesApi: AgenciesApi, private route:ActivatedRoute, private tripsApi:TripsApi) {
    //agenciesApi.getAll$().subscribe(this.subscriptor);
    this.agencies$ = this.agenciesApi.getAll$();
    this.search$.subscribe(searchTerm=>this.agencies$ = this.agenciesApi.getByText$(searchTerm));

    this.agencies$=this.search$.pipe(
      // map(searchTerm=>this.agenciesApi.getByText$(searchTerm))
      switchMap(searchTerm=>this.agenciesApi.getByText$(searchTerm))
      //concatMap((searchTerm)=>this.agenciesApi.getByText$(searchTerm))
      //exhaustMap((searchTerm)=>this.agenciesApi.getByText$(searchTerm))
      //mergeMap()
    );

      // const q = this.route.snapshot.queryParamMap.get('q');
      // console.log(q);

      // this.route.queryParamMap.subscribe(queryParamMap=>console.log(queryParamMap.get('q')));

      //this.route.queryParamMap.subscribe(queryParamMap=>this.trips$=tripsApi.getByText$(queryParamMap.get('q')!));

      //console.log(this.trips$.subscribe());

      this.trips$= this.route.queryParamMap.pipe(
        map(qpm=>qpm.get('q')),
        switchMap(agencyId=>this.tripsApi.getByText$(agencyId))
      )


  }


  //ESTO ES COMO NO HACERLO
  onReload() {
    // this.agenciesApi.getAll$().subscribe(
    //   (data) => {
    //     //this.agencies = data
    //   },
    //   (err) => {
    //     console.log('hay un fallo');
    //     this.error = true;
    //   });
    this.search$.next("");

  }
  onSearch(searchTerm:string){
    this.search$.next(searchTerm);
    //this.agencies$ = this.agenciesApi.getByText$(searchTerm)
  }
}
