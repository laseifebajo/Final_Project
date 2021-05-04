import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpursinfoPageRoutingModule } from './spursinfo-routing.module';

import { SpursinfoPage } from './spursinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpursinfoPageRoutingModule

  ],
  exports:[SpursinfoPage],
  declarations: [SpursinfoPage]
})
export class SpursinfoPageModule {}
