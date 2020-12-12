import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitMatcherPageRoutingModule } from './fruit-matcher-routing.module';

import { FruitMatcherPage } from './fruit-matcher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitMatcherPageRoutingModule
  ],
  declarations: [FruitMatcherPage]
})
export class FruitMatcherPageModule {}
