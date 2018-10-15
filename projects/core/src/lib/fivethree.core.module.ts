import { LoadingRefresherContentComponent } from './loading-refresher-content/loading-refresher-content.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './step/step.component';
import { StepHeaderComponent } from './step-header/step-header.component';
import { StepContentComponent } from './step-content/step-content.component';
import { ExpandableComponent } from './expandable/expandable.component';
import { RouterItemComponent } from './router-item/router-item.component';
import { CollapsableMenuDirective } from './collapsable-menu/collapsable-menu.directive';
import { CollapsableMenuButtonComponent } from './collapsable-menu/collapsable-menu-button/collapsable-menu-button.component';
import { PasswordComponent } from './password/password.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { BottomSheetContentComponent } from './bottom-sheet/bottom-sheet-content/bottom-sheet-content.component';
import { ToolbarSearchComponent } from './toolbar-search/toolbar-search.component';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { LoadingProgressBarComponent } from './loading-progress-bar/loading-progress-bar.component';
import { LoadingContentComponent } from './loading-content/loading-content.component';
import { LoadingFabComponent } from './loading-fab/loading-fab.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { IfPlatformDirective } from './directives/if-platform.directive';
import { CenterDirective } from './directives/center.directive';
import { PermissionsDirective } from './directives/permissions.directive';
import { RippleComponent } from './ripple/ripple.component';
import { ViewportDirective } from './directives/viewport.directive';
import { PullDirective } from './directives/pull.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    ExpandableComponent,
    PasswordComponent,
    StepperComponent,
    StepComponent,
    StepHeaderComponent,
    StepContentComponent,
    RouterItemComponent,
    CenterDirective,
    CollapsableMenuButtonComponent,
    CollapsableMenuDirective,
    BottomSheetComponent,
    BottomSheetContentComponent,
    ToolbarSearchComponent,
    LoadingButtonComponent,
    LoadingProgressBarComponent,
    LoadingContentComponent,
    LoadingFabComponent,
    AppBarComponent,
    IfPlatformDirective,
    PermissionsDirective,
    RippleComponent,
    ViewportDirective,
    PullDirective,
    LoadingRefresherContentComponent,
    LoadingSpinnerComponent
  ],
  exports: [
    ExpandableComponent,
    PasswordComponent,
    StepperComponent,
    StepComponent,
    StepHeaderComponent,
    StepContentComponent,
    RouterItemComponent,
    CollapsableMenuDirective,
    CenterDirective,
    CollapsableMenuButtonComponent,
    BottomSheetComponent,
    BottomSheetContentComponent,
    ToolbarSearchComponent,
    LoadingButtonComponent,
    LoadingProgressBarComponent,
    LoadingContentComponent,
    LoadingFabComponent,
    AppBarComponent,
    IfPlatformDirective,
    PermissionsDirective,
    RippleComponent,
    ViewportDirective,
    PullDirective,
    LoadingRefresherContentComponent,
    LoadingSpinnerComponent
  ]
})
export class FivethreeCoreModule { }
