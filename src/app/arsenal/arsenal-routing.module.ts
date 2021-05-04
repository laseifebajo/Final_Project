import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArsenalPage } from './arsenal.page';

const routes: Routes = [
  {
    path: '',
    component: ArsenalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArsenalPageRoutingModule {}
