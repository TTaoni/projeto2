import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NomesPageRoutingModule } from './nomes-routing.module';

import { NomesPage } from './nomes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NomesPageRoutingModule
  ],
  declarations: [NomesPage]
})
export class NomesPageModule {}
