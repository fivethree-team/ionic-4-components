import { FivIconModule } from './../icon/icon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivGallery } from './gallery.component';
import { IonicModule } from '@ionic/angular';
import { FivOverlayModule } from '../overlay/overlay.module';
import { FivIfModule } from '../if-platform/if-platform.module';
import { FivPullModule } from '../pull/pull.module';
import { FivGalleryImage } from './gallery-image/gallery-image.component';
import { FivGalleryToolbar } from './gallery-toolbar/gallery-toolbar.component';
import { FivGalleryToolbarContent } from './gallery-toolbar-content/gallery-toolbar-content.component';

@NgModule({
  declarations: [
    FivGallery,
    FivGalleryImage,
    FivGalleryToolbar,
    FivGalleryToolbarContent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FivIconModule,
    FivIfModule,
    FivPullModule,
    FivOverlayModule
  ],
  exports: [
    FivGallery,
    FivGalleryImage,
    FivGalleryToolbar,
    FivGalleryToolbarContent
  ]
})
export class FivGalleryModule {}
