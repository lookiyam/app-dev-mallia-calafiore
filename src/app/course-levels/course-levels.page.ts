import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProspectusService } from '../services/prospectus.service';

@Component({
  selector: 'app-course-levels',
  templateUrl: './course-levels.page.html',
  styleUrls: ['./course-levels.page.scss'],
})
export class CourseLevelsPage implements OnInit {

  public institute: any = {};

  constructor(
    public route: ActivatedRoute,
    public prospectusService: ProspectusService
  ) { }

  ngOnInit()
  {
    const code = this.route.snapshot.params.code;
    this.institute = this.prospectusService.getInstitute(code);

    // filters out the cpd entry
    //this.institutes = this.institutes.filter(i => i.code != 'cpd');
  }
}
