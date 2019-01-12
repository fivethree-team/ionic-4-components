import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HammerGestureConfig } from '@angular/platform-browser';
import { Hammer } from 'hammerjs';
import { FivStepper } from './stepper/stepper.component';
import { FivStep } from './step/step.component';
import { FivStepHeader} from './step-header/step-header.component';
import { FivStepContent } from './step-content/step-content.component';
import { FivExpandable } from './expandable/expandable.component';
import { FivRouterItem } from './router-item/router-item.component';
import { FivCollapsableMenu } from './collapsable-menu/collapsable-menu.directive';
import { FivCollapsableMenuButton } from './collapsable-menu-button/collapsable-menu-button.component';
import { FivPasswordInput } from './password-input/password-input.component';
import { FivBottomSheet} from './bottom-sheet/bottom-sheet.component';
import { FivBottomSheetContent } from './bottom-sheet-content/bottom-sheet-content.component';
import { FivLoadingButton } from './loading-button/loading-button.component';
import { FivLoadingProgressBar } from './loading-progress-bar/loading-progress-bar.component';
import { FivLoadingContent } from './loading-content/loading-content.component';
import { FivLoadingFab } from './loading-fab/loading-fab.component';
import { FivAppBar } from './app-bar/app-bar.component';
import { FivIfPlatform } from './directives/if-platform.directive';
import { FivCenter} from './directives/center.directive';
import { FivPermissions } from './directives/permissions.directive';
import { FivRipple } from './ripple/ripple.component';
import { FivViewport } from './directives/viewport.directive';
import { FivPull } from './directives/pull.directive';
import { FivLoadingSpinner } from './loading-spinner/loading-spinner.component';
import { FivStepperHorizontal } from './stepper-horizontal/stepper-horizontal.component';
import { FivIcon} from './icon/icon.component';
import { FivDialog } from './dialog/dialog.component';
import { FivLoadingRefresherContent } from './loading-refresher-content/loading-refresher-content.component';
import { FivAppBarTab } from './app-bar-tab/app-bar-tab.component';
import { FivAppBarTabContent } from './app-bar-tab-content/app-bar-tab-content.component';
import { FivImageViewer } from './image-viewer/image-viewer.component';
import { FivToolbarSearch } from './toolbar-search/toolbar-search.component';
import { FivButtons } from './buttons/buttons.component';
import { FivButton } from './button/button.component';
import { FivPopover } from './popover/popover.component';
import { FivExpandableIndicator} from './expandable-indicator/expandable-indicator.component';


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
    FivExpandable,
    FivPasswordInput,
    FivStepper,
    FivStep,
    FivStepHeader,
    FivStepContent,
    FivRouterItem,
    FivCenter,
    FivCollapsableMenuButton,
    FivCollapsableMenu,
    FivBottomSheet,
    FivBottomSheetContent,
    FivToolbarSearch,
    FivLoadingButton,
    FivLoadingProgressBar,
    FivLoadingContent,
    FivLoadingFab,
    FivAppBar,
    FivIfPlatform,
    FivPermissions,
    FivRipple,
    FivViewport,
    FivPull,
    FivLoadingRefresherContent,
    FivLoadingSpinner,
    FivStepperHorizontal,
    FivIcon,
    FivDialog,
    FivAppBarTab,
    FivAppBarTabContent,
    FivImageViewer,
    FivButtons,
    FivButton,
    FivPopover,
    FivExpandableIndicator,
  ],
  entryComponents: [FivImageViewer, FivPopover],
  exports: [
    FivExpandable,
    FivPasswordInput,
    FivStepper,
    FivStep,
    FivStepHeader,
    FivStepContent,
    FivRouterItem,
    FivCollapsableMenu,
    FivCenter,
    FivCollapsableMenuButton,
    FivBottomSheet,
    FivBottomSheetContent,
    FivToolbarSearch,
    FivLoadingButton,
    FivLoadingProgressBar,
    FivLoadingContent,
    FivLoadingFab,
    FivAppBar,
    FivIfPlatform,
    FivPermissions,
    FivRipple,
    FivViewport,
    FivPull,
    FivLoadingRefresherContent,
    FivLoadingSpinner,
    FivStepperHorizontal,
    FivIcon,
    FivDialog,
    FivAppBarTab,
    FivAppBarTabContent,
    FivImageViewer,
    FivButtons,
    FivButton,
    FivExpandableIndicator
  ]
})
export class FivethreeCoreModule { }
