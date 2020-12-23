import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoatRenatlPageRoutingModule } from './boat-renatl-routing.module';

import { BoatRenatlPage } from './boat-renatl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoatRenatlPageRoutingModule
  ],
  declarations: [BoatRenatlPage]
})
export class BoatRenatlPageModule {}
