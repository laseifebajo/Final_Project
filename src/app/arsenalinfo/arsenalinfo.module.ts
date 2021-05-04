import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArsenalinfoPageRoutingModule } from './arsenalinfo-routing.module';

import { ArsenalinfoPage } from './arsenalinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArsenalinfoPageRoutingModule
  ],
  exports: [ArsenalinfoPage],
  declarations: [ArsenalinfoPage]
})
export class ArsenalinfoPageModule {}
