import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ch2Pg2Page } from './ch2-pg2.page';

const routes: Routes = [
  {
    path: '',
    component: Ch2Pg2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ch2Pg2PageRoutingModule {}
