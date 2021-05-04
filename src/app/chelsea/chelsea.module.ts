import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChelseaPageRoutingModule } from './chelsea-routing.module';

import { ChelseaPage } from './chelsea.page';
import {ChelseainfoPageModule} from '../chelseainfo/chelseainfo.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChelseaPageRoutingModule,
    ChelseainfoPageModule
  ],
  declarations: [ChelseaPage]
})
export class ChelseaPageModule {}
