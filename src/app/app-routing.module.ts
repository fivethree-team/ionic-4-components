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
  { path: 'app-bar', loadChildren: './pages/app-bar/app-bar.module#AppBarPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
