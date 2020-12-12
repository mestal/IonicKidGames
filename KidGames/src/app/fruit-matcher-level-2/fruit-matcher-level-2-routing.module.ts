import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FruitMatcherLevel2Page } from './fruit-matcher-level-2.page';

const routes: Routes = [
  {
    path: '',
    component: FruitMatcherLevel2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitMatcherLevel2PageRoutingModule {}
