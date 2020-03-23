# fiv-app-bar

### Motivation

Material style [App Bar](https://material.io/components/app-bars-bottom/#anatomy) component for Ionic.

## Import the module

Import `FivAppBarModule` into the page or component:

```typescript
import { NgModule } from '@angular/core';
import { FivAppBarModule } from '@fivethree/core';

@NgModule({
  imports: [
    ...
    FivAppBarModule,
    ...
  ]
})
export class TabsPageModule {}
```

## Usage

```html
<ion-tabs #tabs>
  <fiv-app-bar slot="bottom" [titleMode]="titleMode" #bar>
    <fiv-fab [fivAppBarFab]="position" #fab>
      <fiv-icon name="color-wand"></fiv-icon>
    </fiv-fab>

    <fiv-app-bar-tab left tab="tab1" href="/tab1">
      <fiv-icon name="home"></fiv-icon>
      <ion-label>Home</ion-label>
    </fiv-app-bar-tab>
    <fiv-app-bar-tab left tab="tab2" href="/tab2">
      <fiv-icon name="images"></fiv-icon>
      <ion-label>Images</ion-label>
    </fiv-app-bar-tab>
    <fiv-app-bar-tab right tab="tab3" href="/tab3">
      <fiv-icon [badge]="1" name="pizza"></fiv-icon>
      <ion-label>Pizza</ion-label>
    </fiv-app-bar-tab>
    <fiv-app-bar-tab right tab="tab4" href="/tab4">
      <fiv-icon name="chatbox-ellipses"></fiv-icon>
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

## Properties

| `titleMode` |                                     |
| ----------- | ----------------------------------- |
| Description |  The title mode of the app bar      |
| Type        |  `hide` \| `show` \| `active-only`  |
| Default     |  `hide`                             |

## CSS Variables

| Name                          | Description                  |
| ----------------------------- | ---------------------------- |
| --fiv-appbar-background-color | Background of the app bar    |
| --fiv-icon-color              | Icon color of the tabs       |
| --fiv-icon-activ-color        | Icon color of the active tab |
