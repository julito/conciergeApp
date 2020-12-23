import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoatRentalPage } from './boat-rental.page';

describe('BoatRentalPage', () => {
  let component: BoatRentalPage;
  let fixture: ComponentFixture<BoatRentalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatRentalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoatRentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
