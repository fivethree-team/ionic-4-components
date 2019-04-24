import { FivBackButtonModule } from './../../../projects/core/src/lib/back-button/back-button.module';
import { FivIconModule } from './../../../projects/core/src/lib/icon/icon.module';
import { ExampleComponent } from './example/example.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MarkdownModule } from 'ngx-markdown';
import { FivethreeCoreModule } from '@fivethree/core';
import { MatTooltipModule, MatTabsModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DocsFooterComponent } from './docs-footer/docs-footer.component';

const components = [
  ExampleComponent,
  HeaderComponent,
  FooterComponent,
  DocsFooterComponent
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
    FivBackButtonModule
  ],
  exports: [
    ...components,
    LottieAnimationViewModule,
    MarkdownModule
  ]
})
export class ComponentsModule { }
