import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendPage } from './agend.page';

const routes: Routes = [
  {
    path: '',
    component: AgendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendPageRoutingModule {}
