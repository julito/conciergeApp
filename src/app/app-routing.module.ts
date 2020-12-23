import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'key-west',
    loadChildren: () => import('./key-west/key-west.module').then( m => m.KeyWestPageModule)
  },
  {
    path: 'seaquarium',
    loadChildren: () => import('./seaquarium/seaquarium.module').then( m => m.SeaquariumPageModule)
  },
  {
    path: 'transportation',
    loadChildren: () => import('./transportation/transportation.module').then( m => m.TransportationPageModule)
  },
  {
    path: 'boat-renatl',
    loadChildren: () => import('./boat-renatl/boat-renatl.module').then( m => m.BoatRenatlPageModule)
  },
  {
    path: 'boat-rental',
    loadChildren: () => import('./boat-rental/boat-rental.module').then( m => m.BoatRentalPageModule)
  },
  {
    path: 'car-rental',
    loadChildren: () => import('./car-rental/car-rental.module').then( m => m.CarRentalPageModule)
  },
  {
    path: 'producto/:productoId',
    loadChildren: () => import('./producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'tours',
    loadChildren: () => import('./tours/tours.module').then( m => m.ToursPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
