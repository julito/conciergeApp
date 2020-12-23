import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoatRenatlPage } from './boat-renatl.page';

describe('BoatRenatlPage', () => {
  let component: BoatRenatlPage;
  let fixture: ComponentFixture<BoatRenatlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatRenatlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoatRenatlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
