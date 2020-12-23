import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeyWestPageRoutingModule } from './key-west-routing.module';

import { KeyWestPage } from './key-west.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeyWestPageRoutingModule
  ],
  declarations: [KeyWestPage]
})
export class KeyWestPageModule {}
