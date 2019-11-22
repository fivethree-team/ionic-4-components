import { FivIfModule } from './../../../projects/core/src/lib/if-platform/if-platform.module';
import { ExampleComponent } from './example/example.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MarkdownModule } from 'ngx-markdown';
import {
  FivIconModule,
  FivBackButtonModule,
  FivGalleryModule
} from '@fivethree/core';
import { MatTooltipModule, MatTabsModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DocsFooterComponent } from './docs-footer/docs-footer.component';
import { TouchFieldComponent } from './touch-field/touch-field.component';

const components = [
  ExampleComponent,
  HeaderComponent,
  FooterComponent,
  DocsFooterComponent,
  TouchFieldComponent
];
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    MarkdownModule.forChild(),
    MatTooltipModule,
    MatTabsModule,
    LottieAnimationViewModule,
    FivIconModule,
    FivBackButtonModule,
    FivGalleryModule,
    FivIfModule
  ],
  exports: [...components, LottieAnimationViewModule, MarkdownModule],
  entryComponents: []
})
export class ComponentsModule {}
