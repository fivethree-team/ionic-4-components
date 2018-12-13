```html
<ion-tabs>
  <ion-tab tab="tab1">
    <ion-router-outlet name="tab1"></ion-router-outlet>
  </ion-tab>
  <ion-tab tab="tab2">
    <ion-router-outlet name="tab2"></ion-router-outlet>
  </ion-tab>
  <ion-tab tab="tab3">
    <ion-router-outlet name="tab3"></ion-router-outlet>
  </ion-tab>
  <ion-tab tab="tab4">
    <ion-router-outlet name="tab4"></ion-router-outlet>
  </ion-tab>

  <fiv-app-bar (fivFabClick)="presentToast('Floating action button clicked')" slot="bottom" [titleLayout]="titleLayout"
    #bar [position]="position" [fabVisible]="true" [icon]="'md-camera'">
    <fiv-app-bar-tab left href="/app-bar" icon="md-home" name="App Bar">
    </fiv-app-bar-tab>
    <fiv-app-bar-tab left href="/expandable" icon="md-resize" name="Expandable">
    </fiv-app-bar-tab>
    <fiv-app-bar-tab right href="/password" icon="md-eye" name="Password">
    </fiv-app-bar-tab>
    <fiv-app-bar-tab right href="/buttons" icon="md-more" name="Buttons">
    </fiv-app-bar-tab>
  </fiv-app-bar>

</ion-tabs>
```