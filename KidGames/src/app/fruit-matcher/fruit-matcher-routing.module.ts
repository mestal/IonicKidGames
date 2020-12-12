import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FruitMatcherPage } from './fruit-matcher.page';

const routes: Routes = [
  {
    path: '',
    component: FruitMatcherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitMatcherPageRoutingModule {}
