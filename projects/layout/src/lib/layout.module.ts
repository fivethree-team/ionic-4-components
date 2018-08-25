import { CommonModule } from '@angular/common';
import { AppBarComponent } from './app-bar/app-bar.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ToolbarSearchComponent } from './toolbar-search/toolbar-search.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [AppBarComponent, ToolbarSearchComponent],
  exports: [AppBarComponent, ToolbarSearchComponent]
})
export class LayoutModule { }
