import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FruitMatcherLevel1Page } from './fruit-matcher-level-1.page';

const routes: Routes = [
  {
    path: '',
    component: FruitMatcherLevel1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitMatcherLevel1PageRoutingModule {}
