import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MancityinfoPage } from './mancityinfo.page';

const routes: Routes = [
  {
    path: '',
    component: MancityinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MancityinfoPageRoutingModule {}
