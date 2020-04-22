import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseInfoPage } from './course-info.page';

describe('CourseInfoPage', () => {
  let component: CourseInfoPage;
  let fixture: ComponentFixture<CourseInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
