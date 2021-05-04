import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpursPage } from './spurs.page';

const routes: Routes = [
  {
    path: '',
    component: SpursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpursPageRoutingModule {}
