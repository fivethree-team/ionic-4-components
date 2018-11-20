import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'components',
    pathMatch: 'full'
  },
  {
    path: 'components',
    loadChildren: './pages/components/components.module#ComponentsPageModule'
  },
  { path: 'bottom-sheet', loadChildren: './pages/bottom-sheet/bottom-sheet.module#BottomSheetPageModule' },
  { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
  { path: 'password', loadChildren: './pages/password/password.module#PasswordPageModule' },
  { path: 'toolbar-search', loadChildren: './pages/toolbar-search/toolbar-search.module#ToolbarSearchPageModule' },
  { path: 'app-bar', loadChildren: './pages/app-bar/app-bar.module#AppBarPageModule' },
  { path: 'viewport', loadChildren: './pages/viewport/viewport.module#ViewportPageModule' },
  { path: 'icon', loadChildren: './pages/icon/icon.module#IconPageModule' },
  { path: 'native-map', loadChildren: './pages/native-map/native-map.module#NativeMapPageModule' },
  {
    path: 'native-map-bottom-sheet',
    loadChildren: './pages/native-map-bottom-sheet/native-map-bottom-sheet.module#NativeMapBottomSheetPageModule'
  },
  { path: 'dialog', loadChildren: './pages/dialog/dialog.module#DialogPageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'image', loadChildren: './pages/image/image.module#ImagePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
