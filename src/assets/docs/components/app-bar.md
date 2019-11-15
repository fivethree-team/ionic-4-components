```html
<ion-tabs #tabs>
  <fiv-app-bar
    (fivFabClick)="presentToast('Floating action button clicked')"
    slot="bottom"
    [titleMode]="titleMode"
    #bar
  >
    <fiv-fab [fivAppBarFab]="position" #fab>
      <fiv-icon
        #iconFeature="fivFeature"
        [fivFeature]="feature"
        name="color-wand"
      ></fiv-icon>
    </fiv-fab>

    <fiv-app-bar-tab left tab="tab1" href="/tab1">
      <fiv-icon name="md-home"></fiv-icon>
      <ion-label>Home</ion-label>
    </fiv-app-bar-tab>
    <fiv-app-bar-tab left tab="tab2" href="/tab2">
      <fiv-icon
        #tabFeature="fivFeature"
        [fivFeature]="feature"
        name="md-images"
      ></fiv-icon>
      <ion-label>Images</ion-label>
    </fiv-app-bar-tab>
    <fiv-app-bar-tab right tab="tab3" href="/tab3">
      <fiv-icon [badge]="1" name="md-pizza"></fiv-icon>
      <ion-label>Pizza</ion-label>
    </fiv-app-bar-tab>
    <fiv-app-bar-tab right tab="tab4" href="/tab4" icon="md-more">
      <fiv-icon name="md-more"></fiv-icon>
      <ion-label>More</ion-label>
    </fiv-app-bar-tab>
  </fiv-app-bar>
</ion-tabs>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.page.html',
  styleUrls: ['./app-bar.page.scss']
})
export class AppBarPage implements OnInit {
  titleMode = 'hide';
  position = 'center';
}
```

```scss
:host {
  --fiv-color-appbar: var(--ion-color-light);
  --fiv-color-icon: rgba(50, 50, 50, 0.78);
}
```
