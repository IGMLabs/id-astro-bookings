import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agency } from 'src/app/core/components/api/agency.interface';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css']
})
export class AgenciesList implements OnInit {

  @Input() public agencies: Agency[]=[];
  @Output() private reload = new EventEmitter();



  constructor(private router:Router, private route:ActivatedRoute) { }


  ngOnInit(): void { }

  public getAgenciesLength() {
    return this.agencies.length;
  }

  public onReloadClick() {
    this.reload.emit();
  }

  public OnSearchClick(agencyId:string){
    this.router.navigate([],{relativeTo:this.route,queryParams:{q:agencyId},queryParamsHandling:'merge'});
  }

}
