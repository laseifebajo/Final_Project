import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArsenalinfoPage } from './arsenalinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ArsenalinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArsenalinfoPageRoutingModule {}
