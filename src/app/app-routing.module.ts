import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'overflow-buttons',
    loadChildren:
      './pages/overflow-buttons/overflow-buttons.module#ButtonsPageModule'
  },
  {
    path: 'components',
    loadChildren: './pages/components/components.module#ComponentsPageModule'
  },
  {
    path: 'bottom-sheet',
    loadChildren:
      './pages/bottom-sheet/bottom-sheet.module#BottomSheetPageModule'
  },
  {
    path: 'progress-bar',
    loadChildren: './pages/loading/loading.module#LoadingPageModule'
  },
  {
    path: 'password',
    loadChildren: './pages/password/password.module#PasswordPageModule'
  },
  {
    path: 'searchbar',
    loadChildren:
      './pages/toolbar-search/toolbar-search.module#ToolbarSearchPageModule'
  },
  {
    path: 'app-bar',
    loadChildren: './pages/app-bar/app-bar.module#AppBarPageModule'
  },
  {
    path: 'viewport',
    loadChildren: './pages/viewport/viewport.module#ViewportPageModule'
  },
  { path: 'icon', loadChildren: './pages/icon/icon.module#IconPageModule' },
  {
    path: 'dialog',
    loadChildren: './pages/dialog/dialog.module#DialogPageModule'
  },
  {
    path: 'gallery',
    loadChildren: './pages/image/image.module#ImagePageModule'
  },
  {
    path: 'refresher',
    loadChildren: './pages/refresh/refresh.module#RefreshPageModule'
  },
  {
    path: 'expandable',
    loadChildren: './pages/expandable/expandable.module#ExpandablePageModule'
  },
  {
    path: 'stepper',
    loadChildren: './pages/stepper/stepper.module#StepperPageModule'
  },
  {
    path: 'editable-label',
    loadChildren:
      './pages/editable-label/editable-label.module#EditableLabelPageModule'
  },
  {
    path: 'feature-discovery',
    loadChildren:
      './pages/feature-discovery/feature-discovery.module#FeatureDirectoryPageModule'
  },
  {
    path: 'getting-started',
    loadChildren:
      './pages/installation/installation.module#InstallationPageModule'
  },
  {
    path: 'test',
    loadChildren: './test/test.module#TestPageModule'
  },
  {
    path: 'developer-tools',
    loadChildren:
      './pages/developer-tools/developer-tools.module#DeveloperToolsPageModule'
  },
  { path: 'fab', loadChildren: './pages/fab/fab.module#FabPageModule' },
  {
    path: '**',
    loadChildren:
      './pages/page-not-found/page-not-found.module#PageNotFoundPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
