import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProspectusService } from '../services/prospectus.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.page.html',
  styleUrls: ['./course-info.page.scss'],
})

export class CourseInfoPage implements OnInit {

  public institute: any = {};

  constructor(
    public route: ActivatedRoute,
    public prospectusService: ProspectusService
  ) { }

  ngOnInit() {
    const code = this.route.snapshot.params.code;
    this.institute = this.prospectusService.getInstitute(code);
  }

}
