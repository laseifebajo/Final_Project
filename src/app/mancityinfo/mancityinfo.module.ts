import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MancityinfoPageRoutingModule } from './mancityinfo-routing.module';

import { MancityinfoPage } from './mancityinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MancityinfoPageRoutingModule
  ],
  exports:[MancityinfoPage],
  declarations: [MancityinfoPage]
})
export class MancityinfoPageModule {}
