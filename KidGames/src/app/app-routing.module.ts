import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'fruit-matcher-level-1',
    loadChildren: () => import('./fruit-matcher-level-1/fruit-matcher-level-1.module').then( m => m.FruitMatcherLevel1PageModule)
  },
  {
    path: 'fruit-matcher-level-2',
    loadChildren: () => import('./fruit-matcher-level-2/fruit-matcher-level-2.module').then( m => m.FruitMatcherLevel2PageModule)
  },
  {
    path: 'fruit-matcher-level-3',
    loadChildren: () => import('./fruit-matcher-level-3/fruit-matcher-level-3.module').then( m => m.FruitMatcherLevel3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
