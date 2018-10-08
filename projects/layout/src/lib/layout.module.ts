import { CommonModule } from '@angular/common';
import { AppBarComponent } from './app-bar/app-bar.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ToolbarSearchComponent } from './toolbar-search/toolbar-search.component';
import { ItemExpandableComponent } from './item-expandable/item-expandable.component';
import { FivStepComponent } from './fiv-stepper/fiv-step/fiv-step.component';
import { FivStepHeaderComponent } from './fiv-stepper/fiv-step-header/fiv-step-header.component';
import { FivStepperComponent } from './fiv-stepper/fiv-stepper.component';
import { FivStepContentComponent } from './fiv-stepper/fiv-step-content/fiv-step-content.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [
    AppBarComponent,
    ToolbarSearchComponent,
    ItemExpandableComponent,
    FivStepComponent,
    FivStepperComponent,
    FivStepHeaderComponent,
    FivStepContentComponent
  ],
  exports: [
    AppBarComponent,
    ToolbarSearchComponent,
    ItemExpandableComponent,
    FivStepComponent,
    FivStepperComponent,
    FivStepHeaderComponent,
    FivStepContentComponent
  ]
})
export class LayoutModule { }
