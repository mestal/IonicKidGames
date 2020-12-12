import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitMatcherLevel3PageRoutingModule } from './fruit-matcher-level-3-routing.module';

import { FruitMatcherLevel3Page } from './fruit-matcher-level-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitMatcherLevel3PageRoutingModule
  ],
  declarations: [FruitMatcherLevel3Page]
})
export class FruitMatcherLevel3PageModule {}
