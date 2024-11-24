import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendPageRoutingModule } from './agend-routing.module';

import { AgendPage } from './agend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendPageRoutingModule
  ],
  declarations: [AgendPage]
})
export class AgendPageModule {}
