import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChelseainfoPageRoutingModule } from './chelseainfo-routing.module';

import { ChelseainfoPage } from './chelseainfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChelseainfoPageRoutingModule
  ],
  exports: [ChelseainfoPage],
  declarations: [ChelseainfoPage]
})
export class ChelseainfoPageModule {}
