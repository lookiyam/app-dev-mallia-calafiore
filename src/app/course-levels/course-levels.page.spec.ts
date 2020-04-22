import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseLevelsPage } from './course-levels.page';

describe('CourseLevelsPage', () => {
  let component: CourseLevelsPage;
  let fixture: ComponentFixture<CourseLevelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLevelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseLevelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
