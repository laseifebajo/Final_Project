import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpursinfoPage } from './spursinfo.page';

const routes: Routes = [
  {
    path: '',
    component: SpursinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpursinfoPageRoutingModule {}
