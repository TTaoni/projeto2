import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NomesPage } from './nomes.page';

const routes: Routes = [
  {
    path: '',
    component: NomesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NomesPageRoutingModule {}
