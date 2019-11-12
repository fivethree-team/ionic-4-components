<img alt="project banner" href="https://fivethree-team.github.io/ionic-4-components" src="banner.svg">

# Ionic 4 Components

Costumizable UI Components for Ionic 4.

[![npm version](https://badge.fury.io/js/%40fivethree%2Fcore.svg)](https://www.npmjs.com/@fivethree/core)

[Documentation](https://fivethree-team.github.io/ionic-4-components) |
[Component Demos](https://fivethree-team.github.io/ionic-4-components/components) |
[Getting Started](https://fivethree-team.github.io/ionic-4-components/getting-started) |
[Get In Touch](https://fivethree.io/)

---

<img src="src/assets/gif/gallery.gif" alt="gallery" width="20%"/><img src="src/assets/gif/pulltorefresh.gif" alt="pullto refresh" width="20%"/><img src="src/assets/gif/feature.gif" alt="feature discovery" width="20%"/><img src="src/assets/gif/dialog.gif" alt="dialog" width="20%"/><img src="src/assets/gif/bottomsheet.gif" alt="bottom sheet" width="20%"/>

# ✨ Features

- Twitter inspired Image Gallery
- Material Design Pull-to-Refresh
- Flexible Dialog Component
- Feature Discovery
- Material Design App Bar for Ionic Tabs
- [more components](https://fivethree-team.github.io/ionic-4-components/components)

# 📦 Installation

To get started, install the package from npm. The latest version supports Ionic 4 and Angular >= 7.

## Install the UI Library

You can use either npm or yarn to install `@fivethree/core` from npm.

```bash
npm install --save @fivethree/core @angular/animations
```

## Configure your Ionic App

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

## Usage Instructions

To use the **UI Library** import one of the feature modules (e.g. FivGalleryModule) into a Page or Component Module.

For example:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FivGalleryModule } from '@fivethree/core';

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
    FivGalleryModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
```

## 🔨 Development

This package is under active construction.

- Run `ng build core` to rebuild the component library.
- Run `ionic s` to serve the project site.
