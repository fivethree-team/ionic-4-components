import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './step/step.component';
import { StepHeaderComponent } from './step-header/step-header.component';
import { StepContentComponent } from './step-content/step-content.component';
import { ExpandableComponent } from './expandable/expandable.component';
import { RouterItemComponent } from './router-item/router-item.component';
import { CenterDirective } from './center/center.directive';
import { CollapsableMenuDirective } from './collapsable-menu/collapsable-menu.directive';
import { CollapsableMenuButtonComponent } from './collapsable-menu/collapsable-menu-button/collapsable-menu-button.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    ExpandableComponent,
    StepperComponent,
    StepComponent,
    StepHeaderComponent,
    StepContentComponent,
    RouterItemComponent,
    CenterDirective,
    CollapsableMenuButtonComponent,
    CollapsableMenuDirective
  ],
  exports: [
    ExpandableComponent,
    StepperComponent,
    StepComponent,
    StepHeaderComponent,
    StepContentComponent,
    RouterItemComponent,
    CollapsableMenuDirective,
    CenterDirective,
    CollapsableMenuButtonComponent
  ]
})
export class FivethreeCoreModule { }
