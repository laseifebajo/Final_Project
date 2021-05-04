import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpursPageRoutingModule } from './spurs-routing.module';

import { SpursPage } from './spurs.page';

import { SpursinfoPage } from '../spursinfo/spursinfo.page';
import { SpursinfoPageModule } from '../spursinfo/spursinfo.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpursPageRoutingModule,
    SpursinfoPageModule
  ],
  declarations: [SpursPage]
})
export class SpursPageModule {}
