import { ExampleComponent } from './example/example.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ExampleComponent]
})
export class ComponentsModule { }
