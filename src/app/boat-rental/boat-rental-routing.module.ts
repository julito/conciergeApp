import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoatRentalPage } from './boat-rental.page';

const routes: Routes = [
  {
    path: '',
    component: BoatRentalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoatRentalPageRoutingModule {}
