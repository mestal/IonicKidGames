import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitMatcherLevel1PageRoutingModule } from './fruit-matcher-level-1-routing.module';

import { FruitMatcherLevel1Page } from './fruit-matcher-level-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitMatcherLevel1PageRoutingModule
  ],
  declarations: [FruitMatcherLevel1Page]
})
export class FruitMatcherLevel1PageModule {}
