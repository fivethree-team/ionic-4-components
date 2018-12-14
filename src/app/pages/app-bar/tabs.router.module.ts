import { AppBarPage } from './app-bar.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'tabs',
    component: AppBarPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../bottom-sheet/bottom-sheet.module#BottomSheetPageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../buttons/buttons.module#ButtonsPageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../bottom-sheet/bottom-sheet.module#BottomSheetPageModule'
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: '../bottom-sheet/bottom-sheet.module#BottomSheetPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app-bar/tabs/tab1',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '',
    redirectTo: '/app-bar/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
