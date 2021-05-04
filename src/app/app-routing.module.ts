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
    path: 'man',
    loadChildren: () => import('./man/man.module').then( m => m.ManPageModule)
  },
  {
    path: 'manutd',
    loadChildren: () => import('./manutd/manutd.module').then( m => m.ManutdPageModule)
  },
  {
    path: 'chelsea',
    loadChildren: () => import('./chelsea/chelsea.module').then( m => m.ChelseaPageModule)
  },
  {
    path: 'arsenal',
    loadChildren: () => import('./arsenal/arsenal.module').then( m => m.ArsenalPageModule)
  },
  {
    path: 'spurs',
    loadChildren: () => import('./spurs/spurs.module').then( m => m.SpursPageModule)
  },
  {
    path: 'mancityinfo',
    loadChildren: () => import('./mancityinfo/mancityinfo.module').then( m => m.MancityinfoPageModule)
  },
  {
    path: 'manutdinfo',
    loadChildren: () => import('./manutdinfo/manutdinfo.module').then( m => m.ManutdinfoPageModule)
  },
  {
    path: 'spursinfo',
    loadChildren: () => import('./spursinfo/spursinfo.module').then( m => m.SpursinfoPageModule)
  },
  {
    path: 'chelseainfo',
    loadChildren: () => import('./chelseainfo/chelseainfo.module').then( m => m.ChelseainfoPageModule)
  },
  {
    path: 'arsenalinfo',
    loadChildren: () => import('./arsenalinfo/arsenalinfo.module').then( m => m.ArsenalinfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
