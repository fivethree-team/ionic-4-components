# @fivethree/layout

## Installation
To get started, install the package from npm. The latest version supports Ionic v4 and Angular/RX 6.

```bash
npm install @fivethree/layout --save

# or if you are using yarn
yarn add @fivethree/layout
```

then in `app.module.ts`, import the `LayoutModule`:

```TS
import { NgModule } from '@angular/core';
import { LayoutModule } from '@fivethree/layout';

@NgModule({
  imports: [
    LayoutModule
  ]
})
export class AppModule {}
```