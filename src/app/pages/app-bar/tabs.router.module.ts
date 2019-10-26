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
            loadChildren: './tabs/one/one.module#OnePageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: './tabs/two/two.module#TwoPageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: './tabs/three/three.module#ThreePageModule'
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: './tabs/four/four.module#FourPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app-bar/tabs/tab1',
        pathMatch: 'full'
      }
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
export class TabsPageRoutingModule {}
