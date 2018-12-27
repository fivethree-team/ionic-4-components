import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { Hammer } from 'hammerjs';
import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './step/step.component';
import { StepHeaderComponent } from './step-header/step-header.component';
import { StepContentComponent } from './step-content/step-content.component';
import { ExpandableComponent } from './expandable/expandable.component';
import { RouterItemComponent } from './router-item/router-item.component';
import { CollapsableMenuDirective } from './collapsable-menu/collapsable-menu.directive';
import { CollapsableMenuButtonComponent } from './collapsable-menu-button/collapsable-menu-button.component';
import { FivPasswordInput } from './password-input/password-input.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { BottomSheetContentComponent } from './bottom-sheet-content/bottom-sheet-content.component';
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
import { StepperHorizontalComponent } from './stepper-horizontal/stepper-horizontal.component';
import { IconComponent } from './icon/icon.component';
import { DialogComponent } from './dialog/dialog.component';
import { LoadingRefresherContentComponent } from './loading-refresher-content/loading-refresher-content.component';
import { AppBarTabComponent } from './app-bar-tab/app-bar-tab.component';
import { AppBarTabContentComponent } from './app-bar-tab-content/app-bar-tab-content.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { ToolbarSearchComponent } from './toolbar-search/toolbar-search.component';
import { FivButtonsComponent } from './fiv-buttons/fiv-buttons.component';
import { ButtonComponent } from './button/button.component';
import { PopoverComponent } from './popover/popover.component';
import { ExpandableIndicatorComponent } from './expandable-indicator/expandable-indicator.component';


export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    pan: { direction: Hammer.DIRECTION_VERTICAL, threshold: 3 },
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    ExpandableComponent,
    FivPasswordInput,
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
    LoadingSpinnerComponent,
    StepperHorizontalComponent,
    IconComponent,
    DialogComponent,
    AppBarTabComponent,
    AppBarTabContentComponent,
    ImageViewerComponent,
    FivButtonsComponent,
    ButtonComponent,
    PopoverComponent,
    ExpandableIndicatorComponent,
  ],
  entryComponents: [ImageViewerComponent, PopoverComponent],
  exports: [
    ExpandableComponent,
    FivPasswordInput,
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
    LoadingSpinnerComponent,
    StepperHorizontalComponent,
    IconComponent,
    DialogComponent,
    AppBarTabComponent,
    AppBarTabContentComponent,
    ImageViewerComponent,
    FivButtonsComponent,
    ButtonComponent,
    ExpandableIndicatorComponent
  ]
})
export class FivethreeCoreModule { }
