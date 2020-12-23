import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarRentalPage } from './car-rental.page';

const routes: Routes = [
  {
    path: '',
    component: CarRentalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRentalPageRoutingModule {}
