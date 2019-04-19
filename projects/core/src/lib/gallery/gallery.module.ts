import { FivIconModule } from './../icon/icon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivGallery } from './gallery.component';
import { IonicModule } from '@ionic/angular';
import { FivOverlayModule } from '../overlay/overlay.module';
import { FivIfModule } from '../directives/if-platform.module';
import { FivPullModule } from '../directives/pull.module';
import { FivGalleryImage } from './gallery-image/gallery-image.component';

@NgModule({
    declarations: [
        FivGallery,
        FivGalleryImage
    ],
    imports: [
        CommonModule,
        IonicModule,
        FivIconModule,
        FivIfModule,
        FivPullModule,
        FivOverlayModule,
    ],
    exports: [
        FivGallery,
        FivGalleryImage
    ],
})
export class FivGalleryModule { }
