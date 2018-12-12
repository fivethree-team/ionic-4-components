import { ExampleComponent } from './example/example.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MarkdownModule } from 'ngx-markdown';
import { FivethreeCoreModule } from 'core';
import { MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule,
    IonicModule,
    MarkdownModule.forChild(),
    FivethreeCoreModule,
    MatTooltipModule
  ],
  exports: [ExampleComponent]
})
export class ComponentsModule { }
