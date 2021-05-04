import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArsenalPageRoutingModule } from './arsenal-routing.module';

import { ArsenalPage } from './arsenal.page';
import{ArsenalinfoPageModule} from '../arsenalinfo/arsenalinfo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArsenalPageRoutingModule,
    ArsenalinfoPageModule

  ],
  declarations: [ArsenalPage]
})
export class ArsenalPageModule {}
