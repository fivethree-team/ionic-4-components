import { ExampleComponent } from './example/example.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MarkdownModule } from 'ngx-markdown';
import { FivethreeCoreModule } from 'core';

@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule,
    IonicModule,
    MarkdownModule.forChild(),
    FivethreeCoreModule
  ],
  exports: [ExampleComponent]
})
export class ComponentsModule { }
