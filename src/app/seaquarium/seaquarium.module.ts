import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeaquariumPageRoutingModule } from './seaquarium-routing.module';

import { SeaquariumPage } from './seaquarium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeaquariumPageRoutingModule
  ],
  declarations: [SeaquariumPage]
})
export class SeaquariumPageModule {}
