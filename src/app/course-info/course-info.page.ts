import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProspectusService } from '../services/prospectus.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.page.html',
  styleUrls: ['./course-info.page.scss'],
})

export class CourseInfoPage implements OnInit {

  // This needs to reference a course, not an institute!


  public course: any = {};



  constructor(
    public route: ActivatedRoute,
    public prospectusService: ProspectusService
  ) { }

  ngOnInit() {
    // The code given is meant for a course, not an institute
    const code = this.route.snapshot.params.code;


    // This service function needs to change -> see getRecipe
    
    this.course = this.prospectusService.getInstitute(code);
    this.course = this.prospectusService.getCourse(code);


  
  }

}
