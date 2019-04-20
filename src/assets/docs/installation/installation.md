# Installation
To get started, install the package from npm. The latest version supports Ionic 4 and Angular 7.

## Step 1. Install the UI Library 

You can use either npm or yarn to install `@fivethree/core` from npm.

```bash
npm install --save @fivethree/core @angular/animations hammerjs
```

## Step 2. Configure your Ionic App 

Once the packages are installed, import `BrowserAnimationsModule` and `FivethreeCoreModule` in `app.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FivethreeCoreModule } from '@fivethree/core';

@NgModule({
  imports: [
    ...
    BrowserAnimationsModule,
    FivethreeCoreModule,
    ...
  ]
})
export class AppModule {}
```

To use components you need to import the `FivethreeCoreModule` into the page or component module. For example:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FivethreeCoreModule } from '@fivethree/core';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    FivethreeCoreModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

```
