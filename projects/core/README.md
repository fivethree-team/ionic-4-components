# @fivethree/core

## Installation
To get started, install the package from npm. The latest version supports Ionic v4 and Angular/RX 6.

```bash
npm install --save @fivethree/core @angular/animations hammerjs

# or if you are using yarn
yarn add @fivethree/core @angular/animations hammerjs
```

then in `app.module.ts`, import the `FivethreeCoreModule`:

```TS
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FivethreeCoreModule } from '@fivethree/core';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FivethreeCoreModule
  ]
})
export class AppModule {}
```

## Components

| Selector       | Description    |
|------------------| ------------------|
| `fiv-app-bar`  | App Bar   |
| `fiv-item-expandable`  | [Expandable Item](src/lib/item-expandable/readme.md) expanding content on click |
| `fiv-toolbar-search`  | Search toolbar |