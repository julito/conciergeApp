import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeyWestPage } from './key-west.page';

const routes: Routes = [
  {
    path: '',
    component: KeyWestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeyWestPageRoutingModule {}
