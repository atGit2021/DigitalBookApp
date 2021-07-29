import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ch2Pg2PageRoutingModule } from './ch2-pg2-routing.module';

import { Ch2Pg2Page } from './ch2-pg2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ch2Pg2PageRoutingModule
  ],
  declarations: [Ch2Pg2Page]
})
export class Ch2Pg2PageModule {}
