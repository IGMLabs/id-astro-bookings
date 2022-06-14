import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agency } from '../../core/components/api/agency.interface';
import { AgenciesApi } from '../../core/components/api/agencies.api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agency-page',
  templateUrl: './agency.page.html',
  styleUrls: ['./agency.page.css']
})
export class AgencyPage implements OnInit {

  public agencyId: string;
  public agency$: Observable<Agency>;

  constructor(route: ActivatedRoute, agenciesApi: AgenciesApi) {
    this.agencyId = route.snapshot.paramMap.get('id') || '';
    this.agency$ = agenciesApi.getById$(this.agencyId);
  }

  ngOnInit(): void {
  }

}
