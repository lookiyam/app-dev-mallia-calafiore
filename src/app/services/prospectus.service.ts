import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CourseInfoPage } from '../course-info/course-info.page';


@Injectable({
  providedIn: 'root'
})
export class ProspectusService
{
  private _data: any = null;

  constructor(
    public http: HttpClient
  ) { }

    public async preload()
    {
      await this.http.get('/assets/prospectusnew.json', {
        headers: new HttpHeaders()
        .set('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Methods', 'GET')
        .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method')
      })
      .toPromise()
      .then(
        (content:string) => {
          console.log(content);
          this._data = content;
        },

        error => {
          console.error(error);
        }
      );
    }

      public getInstituteIcon(institute: any): string
      {
        switch (institute.code)
        {
          case 'ias': return 'Applied.png';
          case 'ica': return 'Arts.png';
          case 'ibmc': return 'Business.png';
          case 'ics': return 'Community.png';
          case 'iet': return 'Engineering.png';
          case 'iict': return 'IT.png';
          case 'gc': return 'Gozo.png';
          case 'gd': return 'GenericDegree.png';
          case 'md': return 'Masters.png';
          case 'cpd': return 'CPD.png';
          case 'oc': return 'Other.png';

        }
          return '';
      }

      public getInstitute(code: string): any
      {
        return this._data.find(i => i.code == code);
      }

      public getInstituteName(institute: any, lang: string= 'en'): string
      {
        return (lang == 'en') ? institute.name_en : institute.name_mt;
      }

      public getInstitutes(): any[]
      {
        return this._data;
      }

      public getCourse(code: string):any
      {
        var institute = this._data.find(i => i.courses.find(i => i.code == code));     
        var course = institute.courses.find(c => c.code== code);
        
        // this adds the institute name in the course
        course.institute = institute.name_en;
        
        return course;
      }

      public getCourseName(courses: any): string
      {
        return courses;
      }
    }