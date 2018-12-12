# Installation
To get started, install the package from npm. The latest version supports Ionic v4 and Angular/RX 6.

## Step 1. Install Fivethree 

You can use either npm or yarn to install `@fivethree/core` from npm.

#### NPM 

```bash
npm install --save @fivethree/core @angular/animations hammerjs
```

### Yarn 

```bash
yarn add @fivethree/core @angular/animations hammerjs
```

## Step 2. Configure Fivethree 

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

To use components from Fivethree, you need to import the `FivethreeCoreModule` into the page or component module. For example:

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
