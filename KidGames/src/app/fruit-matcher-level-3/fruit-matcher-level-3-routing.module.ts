import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FruitMatcherLevel3Page } from './fruit-matcher-level-3.page';

const routes: Routes = [
  {
    path: '',
    component: FruitMatcherLevel3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitMatcherLevel3PageRoutingModule {}
