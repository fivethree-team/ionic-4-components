import { ExampleComponent } from './example/example.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MarkdownModule } from 'ngx-markdown';
import { FivethreeCoreModule } from 'core';
import { MatTooltipModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  declarations: [
    ExampleComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MarkdownModule.forChild(),
    TranslateModule.forChild(),
    FivethreeCoreModule,
    MatTooltipModule,
    LottieAnimationViewModule
  ],
  exports: [
    ExampleComponent,
    HeaderComponent,
    FooterComponent,
    FivethreeCoreModule,
    LottieAnimationViewModule,
    MarkdownModule
  ]
})
export class ComponentsModule { }
