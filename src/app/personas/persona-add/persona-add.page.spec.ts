import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonaAddPage } from './persona-add.page';

describe('PersonaAddPage', () => {
  let component: PersonaAddPage;
  let fixture: ComponentFixture<PersonaAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
