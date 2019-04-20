# Ionic 4 UI Library

[![npm version](https://badge.fury.io/js/%40fivethree%2Fcore.svg)](https://www.npmjs.com/@fivethree/core)

[Documentation](https://fivethree-team.github.io/ionic-4-components) |
[Component Demos](https://fivethree-team.github.io/ionic-4-components/components) |
[Getting Started](https://fivethree-team.github.io/ionic-4-components/getting-started)


# Installation
To get started, install the package from npm. The latest version supports Ionic 4 and Angular 7.

## Step 1. Install the UI Library 

You can use either npm or yarn to install `@fivethree/core` from npm.

```bash
npm install --save @fivethree/core @angular/animations hammerjs
```

## Step 2. Configure your Ionic App 

Once the packages are installed, import `BrowserAnimationsModule` in `app.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    ...
    BrowserAnimationsModule,
    ...
  ]
})
export class AppModule {}
```

To use the library import it into the page or component module. You can either import the full FivethreeCoreModule or one of the feature modules (e.g. FivGalleryModule).

For example:

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


## Development
This package is under active construction.

* Run `ng build core` to rebuild the component library.
* Run `ionic s` to serve the project site.
