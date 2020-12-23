import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeaquariumPage } from './seaquarium.page';

describe('SeaquariumPage', () => {
  let component: SeaquariumPage;
  let fixture: ComponentFixture<SeaquariumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaquariumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeaquariumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
