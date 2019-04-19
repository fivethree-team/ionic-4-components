# fiv-password-input

## Usage 

Import `FivPasswordInputModule` into your page.

```typescript
import { FivPasswordInputModule } from '@fivethree/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

import { FivPasswordInputModule } from '@fivethree/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FivPasswordInputModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
```