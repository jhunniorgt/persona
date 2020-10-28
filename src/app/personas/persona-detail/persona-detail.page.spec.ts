import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonaDetailPage } from './persona-detail.page';

describe('PlaceDetailPage', () => {
  let component: PersonaDetailPage;
  let fixture: ComponentFixture<PersonaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
