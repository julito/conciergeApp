import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoatRentalPageRoutingModule } from './boat-rental-routing.module';

import { BoatRentalPage } from './boat-rental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoatRentalPageRoutingModule
  ],
  declarations: [BoatRentalPage]
})
export class BoatRentalPageModule {}
