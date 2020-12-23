import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeaquariumPage } from './seaquarium.page';

const routes: Routes = [
  {
    path: '',
    component: SeaquariumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeaquariumPageRoutingModule {}
