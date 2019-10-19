import { FivBottomSheetModule } from './bottom-sheet/bottom-sheet.module';
import { FivButtonModule } from './button/button.module';
import { FivGalleryModule } from './gallery/gallery.module';
import { FivIconModule } from './icon/icon.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FivPasswordInputModule } from './password-input/password-input.module';
import { FivExpandableModule } from './expandable/expandable.module';
import { FivStepperModule } from './stepper/stepper.module';
import { FivRippleModule } from './ripple/ripple.module';
import { FivRouterItemModule } from './router-item/router-item.module';
import { FivOverlayModule } from './overlay/overlay.module';
import { FivIfModule } from './if-platform/if-platform.module';
import { FivPullModule } from './pull/pull.module';
import { FivCenterModule } from './center/center.module';
import { FivAppBarModule } from './app-bar/app-bar.module';
import { FivFabModule } from './fab/fab.module';
import { FivSpinnerModule } from './spinner/spinner.module';
import { FivBackButtonModule } from './back-button/back-button.module';
import { FivOverflowButtonsModule } from './overflow-buttons/overflow-buttons.module';
import { FivCollapsableModule } from './collapsable-menu/collapsable-menu.module';
import { FivDialogModule } from './dialog/dialog.module';
import { FivEditableLabelModule } from './editable-label/editable-label.module';
import { FivRefresherModule } from './refresher/refresher.module';
import { FivLoadingProgressBarModule } from './loading-progress-bar/loading-progress-bar.module';
import { FivNetworkStatusModule } from './network-status/network-status.module';
import { FivPopoverModule } from './popover/popover.module';
import { FivPermissionsModule } from './permissions/permissions.module';
import { FivViewportModule } from './viewport/viewport.module';
import { FivLazyImageModule } from './lazy-image/lazy-image.module';
import { FivFeatureDiscoveryModule } from './feature-discovery/feature-discovery.module';
import { FivSearchbarModule } from './searchbar/searchbar.module';

const componentModules = [
  FivAppBarModule,
  FivBackButtonModule,
  FivBottomSheetModule,
  FivButtonModule,
  FivOverflowButtonsModule,
  FivCollapsableModule,
  FivDialogModule,
  FivEditableLabelModule,
  FivExpandableModule,
  FivFeatureDiscoveryModule,
  FivGalleryModule,
  FivIconModule,
  FivRefresherModule,
  FivFabModule,
  FivLoadingProgressBarModule,
  FivSpinnerModule,
  FivNetworkStatusModule,
  FivOverlayModule,
  FivPasswordInputModule,
  FivPopoverModule,
  FivRippleModule,
  FivRouterItemModule,
  FivStepperModule,
  FivSearchbarModule
];

const directiveModules = [
  FivCenterModule,
  FivIfModule,
  FivLazyImageModule,
  FivPermissionsModule,
  FivPullModule,
  FivViewportModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ...componentModules,
    ...directiveModules
  ],
  exports: [...componentModules, ...directiveModules]
})
export class CoreModule {}
