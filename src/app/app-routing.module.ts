import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'dialog', loadChildren: './dialog/dialog.module#DialogPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'map-native', loadChildren: './map-native/map-native.module#MapNativePageModule' },
  { path: 'map-web-native', loadChildren: './map-web-native/map-web-native.module#MapWebNativePageModule' },
  { path: 'layout', loadChildren: './layout/layout.module#LayoutPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
