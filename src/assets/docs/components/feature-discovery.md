# fivFeature

### Motivation

Material style [Feature Discovery](https://material.io/archive/guidelines/growth-communications/feature-discovery.html) component for Ionic.

## Import the module

Import `FivFeatureDiscoveryModule` into `app.module.ts`, because the `FivFeatureDiscovery` component has to be registered as an entry component.

```typescript
import { NgModule } from '@angular/core';
import { FivFeatureDiscoveryModule } from '@fivethree/core';

@NgModule({
  imports: [
    ...
    FivFeatureDiscoveryModule,
    ...
  ]
})
export class AppModule {}
```

Now import `FivFeatureDiscoveryModule` in your page or component module:

```typescript
import { NgModule } from '@angular/core';
import { FivFeatureDiscoveryModule } from '@fivethree/core';

@NgModule({
  imports: [
    ...
    FivFeatureDiscoveryModule,
    ...
  ]
})
export class HomePageModule {}
```

## Usage

```html
<ion-button #feature="fivFeature" [fivFeature]="content">
  Click Me
</ion-button>

<!-- or use the fiv-icon for cool icon effect -->
<ion-button>
  <fiv-icon #feature="fivFeature" [fivFeature]="content" name="add"> </fiv-icon>
</ion-button>

...
<!-- the content that will be displayed in the circle -->
<ng-template #content>
  <div padding>
    <ion-text color="light">
      <h1>Take the Tour</h1>
      <p>You can also build a little feature tour.</p>
    </ion-text>
  </div>
</ng-template>
```

Open the Feature Discovery overlay from your template:

```html
<ion-button (click)="feature.show()">
  Open Feature
</ion-button>
```

Control the Component in your .ts file:

```typescript
import { FivFeature } from '@fivethree/core';
...

@Component({
  ...
})
export class HomePage {

  @ViewChild('feature') feature: FivFeature;

  ...

  show() {
    this.feature.show();
  }
  hide() {
    this.feature.hide();
  }
}

```

## Properties

| `maxDiameter` |                                                          |
| ------------- | -------------------------------------------------------- |
| Description   |  The max diameter for the feature discovery content area |
| Type          |  `number`                                                |
| Default       |  1080                                                    |

| `diameter`  |                                                          |
| ----------- | -------------------------------------------------------- |
| Description |  The max diameter for the feature discovery content area |
| Type        |  `number`                                                |
| Default     |  Minimum value of `maxDiameter` and device width         |

| `contentOffset` |                            |
| --------------- | -------------------------- |
| Description     |  The offset of the content |
| Type            |  `number`                  |
| Default         |  20                        |

| `featurePadding` |                            |
| ---------------- | -------------------------- |
| Description      | The padding of the content |
| Type             |  `number`                  |
| Default          |  20                        |

## Events

| Name              | Description                         |
| ----------------- | ----------------------------------- |
| `fivFeatureClick` | Emitted when the feature is clicked |
| `fivOpen`         | Emitted when the feature di         |

## Methods

`FivFeature`

| Name   | Description                |
| ------ | -------------------------- |
| `show` | Show the feature discovery |
| `hide` | Hide the feature discovery |

## CSS Variables

| Name                | Description                                      |
| ------------------- | ------------------------------------------------ |
| --fiv-color-feature | Background of the feature discovery content area |
| --fiv-color-pulse   | Color for the pulse color                        |
| --fiv-icon-color    | Icon color of the icon inside the pulse circle   |
