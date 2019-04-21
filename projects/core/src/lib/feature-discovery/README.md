# Feature Discovery

## Import

```typescript
import { FivFeatureDiscoveryModule } from '@fivethree/core';
...
@NgModule({
  imports: [
    ...
    FivFeatureDiscoveryModule
  ],
  ...
})
export class HomePageModule {}

```

## Usage

### Basic Example

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



