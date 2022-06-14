import { Component, OnInit } from '@angular/core';
import { IdName } from 'src/app/core/components/api/id-name.interface';
import { IdNameApi } from '../../core/components/api/id-name.api';
import { AgenciesApi } from '../../core/components/api/agencies.api';
import { Agency } from '../../core/components/api/agency.interface';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-agency',
  templateUrl: './new-agency.page.html',
  styleUrls: ['./new-agency.page.css']
})
export class NewAgencyPage implements OnInit {

  public ranges:IdName[] = [];
  public statuses;

  constructor(idNameApi : IdNameApi, private agenciesApi: AgenciesApi) {
    this.ranges = idNameApi.getRanges();
    this.statuses = idNameApi.getStatuses();
  }

  ngOnInit(): void {
  }

  onSave(newAgencyData:Agency){
    this.agenciesApi.post$(newAgencyData).subscribe(() => {});
  }

}
