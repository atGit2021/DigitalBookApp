import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ch1Pg2Page } from './ch1-pg2.page';

const routes: Routes = [
  {
    path: '',
    component: Ch1Pg2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ch1Pg2PageRoutingModule {}
