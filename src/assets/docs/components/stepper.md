# fiv-stepper

A layout component to build steppers (e.g. for forms) in your ionic 4 project (currently in beta)

![Fiv Stepper Demo GIF](https://github.com/fivethree-team/fivethree/blob/develop/projects/layout/src/lib/fiv-stepper/demo.gif?raw=true)

## Getting Started

The stepper component is part of @fivethree/layout package.

```console
npm install @fivethree/layout
```

import LayoutModule inside your AppModule or PageModule.

```typescript
import { LayoutModule } from '@fivethree/layout';
...

@NgModule({
  imports: [
    ...
    LayoutModule
  ],
  declarations: [...]
})
export class PageModule {}
```

### Prerequisites

This component is build to be used in an ionic 4 CLI project.
You also need to have the angular animation installed in your project.

```console
npm install @angular/animations
```

Peer Dependencies

```json
"@angular/common": "^6.1.0",
"@angular/core": "^6.1.0",
"@ionic/angular": "^4.0.0-beta.7",
```

### Usage

#### Basic Example

```html
<ion-content>
  <fiv-stepper #stepper>
    <fiv-step
      [title]="'Step 1'"
      [subtitle]="'a step with an icon'"
      [icon]="'trash'"
    >
      <!-- step content here-->
      <ion-card>
        ...
        <ion-button (click)="doStuff(stepper)"></ion-button>
      </ion-card>
    </fiv-step>

    <fiv-step
      [title]="'Step 2'"
      [subtitle]="'a step with index number'"
      [index]="2"
      >...</fiv-step
    >

    <fiv-step ...>...</fiv-step>
  </fiv-stepper>
</ion-content>
```

...in your pages ts file use the stepper component something like this

```typescript
import { FivStepperComponent } from '@fivethree/layout';
...

@Component({
  ...
})
export class Page {

  ...

  doStuff(stepper: FivStepperComponent){
    stepper.next();
  }

}

```

### API

#### Stepper

## Methods

| Method         | Parameters    | Description                                                                                          |
| -------------- | ------------- | ---------------------------------------------------------------------------------------------------- |
| `open`         | index: number | open the step at index                                                                               |
| `close`        | index: number | close the step at index                                                                              |
| `closeAll`     | -             | close all open steps                                                                                 |
| `select`       | index: number | closes all open steps and opens step at index                                                        |
| `next`         | -             | opens the next step (if available)                                                                   |
| `previous`     | -             | opens the previous step (if available)                                                               |
| `completeStep` | index: number | complete the step at index (if you are using icons in your steps, it will transition to a checkmark) |
| `reset`        | index: number | reset a completed step                                                                               |

#### Step

## Input

| Input      | Type    | Description                              |
| ---------- | ------- | ---------------------------------------- |
| `index`    | number  | displays the index number in step header |
| `icon`     | string  | displays an ionicon instead of an index  |
| `isLast`   | boolean | defaults to false                        |
| `title`    | string  | title of step header                     |
| `subtitle` | string  | subtitle of step header                  |

## Output

| Output       | Event Data       | Description                                  |
| ------------ | ---------------- | -------------------------------------------- |
| `onDidOpen`  | FivStepComponent | will be emitted when a step has been opened. |
| `onDidClose` | FivStepComponent | will be emitted when a step has been closed. |

### Theming

You can modify the colors of the components by overriding the following css variables

Colors

- `--fiv-color-circle:`
  background color of the step circles (default: var(--ion-color-primary)
- `--fiv-color-circle-color:`
  color of the step circles content (index or icon) (default: var(--ion-color-light)
- `--fiv-color-timeline:`
  color of the timeline between the steps (default: var(--ion-color-medium)
- `--fiv-color-title:`
  color of the step headers title (default: var(--ion-color-dark)
- `--fiv-color-subtitle:`
  color of the step headers subtitle (default: var(--ion-color-medium)

## Built With

- [Ionic](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Angular](https://maven.apache.org/) - Dependency Management

## Authors

- **Gary Großgarten** - [garygrossgarten](https://github.com/garygrossgarten)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Vertical Stepper

```html
<fiv-stepper #stepper [mode]="'vertical'">
  <fiv-step [title]="'Awesome Title'" [subtitle]="'Awesome Subtitle'">
  </fiv-step>
  <fiv-step [title]="'Awesome Title'" [subtitle]="'Awesome Subtitle'">
  </fiv-step>
  <fiv-step [title]="'Awesome Title'" [subtitle]="'Awesome Subtitle'">
  </fiv-step>
</fiv-stepper>
```

## Horizontal Stepper

```html
<fiv-stepper #stepper [mode]="'horizontal'">
  <fiv-step [title]="'Awesome Title'" [subtitle]="'Awesome Subtitle'">
  </fiv-step>
  <fiv-step [title]="'Awesome Title'" [subtitle]="'Awesome Subtitle'">
  </fiv-step>
  <fiv-step [title]="'Awesome Title'" [subtitle]="'Awesome Subtitle'">
  </fiv-step>
</fiv-stepper>
```
