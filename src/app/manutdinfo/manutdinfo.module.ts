import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManutdinfoPageRoutingModule } from './manutdinfo-routing.module';

import { ManutdinfoPage} from './manutdinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManutdinfoPageRoutingModule
  ],
  exports: [ManutdinfoPage],
  declarations: [ManutdinfoPage]
})
export class ManutdinfoPageModule {}
