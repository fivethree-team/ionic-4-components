import { FivIconModule } from './icon/icon.module';
import { FivGallery } from './gallery/gallery.component';
import { FivGalleryImage } from './gallery-image/gallery-image.component';
import { FivBackButton } from './back-button/back-button.component';
import { FivDialogService } from './services/dialog.service';
import { FivNetworkStatus } from './network-status/network-status.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HammerGestureConfig } from '@angular/platform-browser';
import { Hammer } from 'hammerjs';
import { FivRouterItem } from './router-item/router-item.component';
import { FivCollapsableMenu } from './collapsable-menu/collapsable-menu.directive';
import { FivCollapsableMenuButton } from './collapsable-menu-button/collapsable-menu-button.component';
import { FivBottomSheet } from './bottom-sheet/bottom-sheet.component';
import { FivBottomSheetContent } from './bottom-sheet-content/bottom-sheet-content.component';
import { FivLoadingButton } from './loading-button/loading-button.component';
import { FivLoadingProgressBar } from './loading-progress-bar/loading-progress-bar.component';
import { FivLoadingContent } from './loading-content/loading-content.component';
import { FivLoadingFab } from './loading-fab/loading-fab.component';
import { FivAppBar } from './app-bar/app-bar.component';
import { FivIfPlatform } from './directives/if-platform.directive';
import { FivCenter } from './directives/center.directive';
import { FivPermissions } from './directives/permissions.directive';
import { FivViewport } from './directives/viewport.directive';
import { FivPull } from './directives/pull.directive';
import { FivLoadingSpinner } from './loading-spinner/loading-spinner.component';
import { FivDialog } from './dialog/dialog.component';
import { FivLoadingRefresherContent } from './loading-refresher-content/loading-refresher-content.component';
import { FivAppBarTab } from './app-bar-tab/app-bar-tab.component';
import { FivAppBarTabContent } from './app-bar-tab-content/app-bar-tab-content.component';
import { FivToolbarSearch } from './toolbar-search/toolbar-search.component';
import { FivButtons } from './buttons/buttons.component';
import { FivButton } from './button/button.component';
import { FivPopover } from './popover/popover.component';
import { FivEditableLabel } from './editable-label/editable-label.component';
import { FivOverlayService } from './services/overlay.service';
import { FivOverlay } from './overlay/overlay.component';
import { FivOverlayContent } from './overlay-content/overlay-content.component';
import { LazyImageDirective } from './directives/lazy-image.directive';
import { FivPasswordInputModule } from './password-input/password-input.module';
import { FivExpandableModule } from './expandable/expandable.module';
import { FivStepperModule } from './stepper/stepper.module';
import { FivRippleModule } from './ripple/ripple.module';


export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    pan: { direction: Hammer.DIRECTION_VERTICAL, threshold: 3 },
  };
}

const componentsModule = [
  FivExpandableModule,
  FivIconModule,
  FivPasswordInputModule,
  FivRippleModule,
  FivStepperModule
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ...componentsModule
  ],
  declarations: [
    FivEditableLabel,
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
    FivViewport,
    FivPull,
    FivLoadingRefresherContent,
    FivLoadingSpinner,
    FivDialog,
    FivAppBarTab,
    FivAppBarTabContent,
    FivGalleryImage,
    FivGallery,
    FivButtons,
    FivButton,
    FivPopover,
    FivOverlay,
    FivOverlayContent,
    FivNetworkStatus,
    FivBackButton,
    LazyImageDirective
  ],
  entryComponents: [
    FivPopover,
    FivOverlayContent,
    FivNetworkStatus,
    FivDialog],
  exports: [
    ...componentsModule,
    FivEditableLabel,
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
    FivViewport,
    FivPull,
    FivLoadingRefresherContent,
    FivLoadingSpinner,
    FivDialog,
    FivAppBarTab,
    FivAppBarTabContent,
    FivGalleryImage,
    FivGallery,
    FivButtons,
    FivButton,
    FivOverlay,
    FivOverlayContent,
    FivNetworkStatus,
    FivBackButton,
    LazyImageDirective
  ],
  providers: [
    FivOverlayService,
    FivDialogService
  ]
})
export class FivethreeCoreModule { }
