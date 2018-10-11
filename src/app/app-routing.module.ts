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
  { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
  { path: 'password', loadChildren: './pages/password/password.module#PasswordPageModule' },
  { path: 'bottom-sheet', loadChildren: './pages/bottom-sheet/bottom-sheet.module#BottomSheetPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
