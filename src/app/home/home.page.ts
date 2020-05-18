import { Component, OnInit } from '@angular/core';
import { ProspectusService } from '../services/prospectus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public institutes: any[] = [];

  constructor(
    public prospectusService: ProspectusService
  ) { }

  ngOnInit()
  {
    this.institutes = this.prospectusService.getInstitutes();

    // filters out the cpd entry
    //this.institutes = this.institutes.filter(i => i.code != 'cpd');
  }

}
