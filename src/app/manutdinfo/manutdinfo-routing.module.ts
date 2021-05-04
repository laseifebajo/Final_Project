import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManutdinfoPage } from './manutdinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ManutdinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManutdinfoPageRoutingModule {}
