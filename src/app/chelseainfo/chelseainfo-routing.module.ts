import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChelseainfoPage } from './chelseainfo.page';

const routes: Routes = [
  {
    path: '',
    component: ChelseainfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChelseainfoPageRoutingModule {}
