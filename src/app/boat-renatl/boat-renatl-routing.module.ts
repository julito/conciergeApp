import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoatRenatlPage } from './boat-renatl.page';

const routes: Routes = [
  {
    path: '',
    component: BoatRenatlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoatRenatlPageRoutingModule {}
