# @fivethree/core

## Installation
To get started, install the package from npm. The latest version supports Ionic v4 and Angular/RX 6.

```bash
npm install @fivethree/core --save

# or if you are using yarn
yarn add @fivethree/core
```

then in `app.module.ts`, import the `FivethreeModule`:

```TS
import { NgModule } from '@angular/core';
import { FivethreeModule } from '@fivethree/core';

@NgModule({
  imports: [
    FivethreeModule
  ]
})
export class AppModule {}
```