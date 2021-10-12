import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Calender } from './calender.component';

describe('CalenderComponent', () => {
  let component: Calender;
  let fixture: ComponentFixture<Calender>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calender ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Calender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
