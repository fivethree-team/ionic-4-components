import { CommonModule } from '@angular/common';
import { AppBarComponent } from './app-bar/app-bar.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ToolbarSearchComponent } from './toolbar-search/toolbar-search.component';
import { ItemExpandableComponent } from './item-expandable/item-expandable.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
    AppBarComponent,
    ToolbarSearchComponent,
    ItemExpandableComponent
  ],
  exports: [
    AppBarComponent,
    ToolbarSearchComponent,
    ItemExpandableComponent
  ]
})
export class LayoutModule { }
