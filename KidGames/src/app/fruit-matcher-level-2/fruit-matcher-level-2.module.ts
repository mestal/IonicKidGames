import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitMatcherLevel2PageRoutingModule } from './fruit-matcher-level-2-routing.module';

import { FruitMatcherLevel2Page } from './fruit-matcher-level-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitMatcherLevel2PageRoutingModule
  ],
  declarations: [FruitMatcherLevel2Page]
})
export class FruitMatcherLevel2PageModule {}
