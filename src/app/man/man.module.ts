import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManPageRoutingModule } from './man-routing.module';

import { ManPage } from './man.page';

 import{MancityinfoPageModule} from '../mancityinfo/mancityinfo.module';
import { MancityinfoPage } from '../mancityinfo/mancityinfo.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManPageRoutingModule,
    MancityinfoPageModule
  ],
  declarations: [ManPage]
})
export class ManPageModule {}
