import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KeyWestPage } from './key-west.page';

describe('KeyWestPage', () => {
  let component: KeyWestPage;
  let fixture: ComponentFixture<KeyWestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyWestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KeyWestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
