```typescript
...
import { FivLoadingContentModule } from '@fivethree/core';

@NgModule({
  imports: [
    ...
    FivLoadingContentModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
```

```html
<fiv-loading-content spinColor="dark" #content>
  ...

  <ion-button (click)="content.showHint()">
    Show hint
  </ion-button>
  <ion-button (click)="content.refresh()">
    Refresh
  </ion-button>
  <ion-button (click)="content.completeRefresh()">
    complete
  </ion-button>

  ...
</fiv-loading-content>
```
