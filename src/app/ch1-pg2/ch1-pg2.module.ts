import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ch1Pg2PageRoutingModule } from './ch1-pg2-routing.module';

import { Ch1Pg2Page } from './ch1-pg2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ch1Pg2PageRoutingModule
  ],
  declarations: [Ch1Pg2Page]
})
export class Ch1Pg2PageModule {}
