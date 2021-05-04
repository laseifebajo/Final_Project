import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManutdPageRoutingModule } from './manutd-routing.module';

import { ManutdPage } from './manutd.page';
import { importType } from '@angular/compiler/src/output/output_ast';

import {ManutdinfoPageModule} from '../manutdinfo/manutdinfo.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManutdPageRoutingModule,
    ManutdinfoPageModule
    

  ],
  declarations: [ManutdPage]
})
export class ManutdPageModule {}
