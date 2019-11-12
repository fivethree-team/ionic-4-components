```html
<fiv-gallery ambient="true">
    <fiv-gallery-toolbar [position]="'top'">
      <fiv-gallery-toolbar-content></fiv-gallery-toolbar-content>
    </fiv-gallery-toolbar>
    <ion-grid fixed no-padding>
      <ion-row class="big">
        <ion-col size="6">
          <fiv-gallery-image [src]="'assets/images/photo_2.jpeg'"></fiv-gallery-image>
        </ion-col>
        <ion-col size="6">
          <fiv-gallery-image [src]="'assets/images/photo_1.jpeg'">
            <div [fivCenter]>
              <fiv-loading-spinner [circleRadius]="8" [diameter]="20" [strokeWidth]="2"></fiv-loading-spinner>
            </div>
          </fiv-gallery-image>
        </ion-col>
      </ion-row>
      <ion-row class="large">
        <ion-col size="4">
          <fiv-gallery-image [src]="'assets/images/photo_3.jpeg'"></fiv-gallery-image>
        </ion-col>
        <ion-col size="4">
          <fiv-gallery-image [src]="'assets/images/photo_4.jpeg'"></fiv-gallery-image>
        </ion-col>
        <ion-col size="4">
          <fiv-gallery-image [src]="'assets/images/photo_5.jpeg'"></fiv-gallery-image>
        </ion-col>
      </ion-row>
      <ion-row class="small">
        <ion-col size="3">
          <fiv-gallery-image [src]="'assets/images/photo_6.jpeg'"></fiv-gallery-image>
        </ion-col>
        <ion-col size="3">
          <fiv-gallery-image [src]="'assets/images/photo_7.jpeg'"></fiv-gallery-image>
        </ion-col>
        <ion-col size="3">
          <fiv-gallery-image [src]="'assets/images/photo_8.jpeg'"></fiv-gallery-image>
        </ion-col>
        <ion-col size="3">
          <fiv-gallery-image [src]="'assets/images/photo_9.jpeg'"></fiv-gallery-image>
        </ion-col>
      </ion-row>
    </ion-grid>

    <fiv-gallery-toolbar [position]="'bottom'">
      <ion-toolbar color="transparent">
        <ion-title>Custom Toolbar</ion-title>

      </ion-toolbar>
    </fiv-gallery-toolbar>

  </fiv-gallery>
  <ion-grid fixed>
    <ion-row>
      <ion-col size="12">

        <ion-item-group>
          <ion-item-divider>
            <ion-label>*ngFor example</ion-label>
          </ion-item-divider>
          <fiv-gallery class="loop">
            <fiv-gallery-image *ngFor="let pic of picsum" [src]="pic"></fiv-gallery-image>
          </fiv-gallery>
          <ion-item-divider>
            <ion-label>*ngFor example async</ion-label>
          </ion-item-divider>
          <fiv-gallery class="loop">
            <fiv-gallery-image *ngFor="let pic of picsumAsync | async" [src]="pic"></fiv-gallery-image>
          </fiv-gallery>

          <ion-item-divider>
            <ion-label>*ngFor example grid</ion-label>
          </ion-item-divider>
          <fiv-gallery>
            <ion-grid fixed>
              <ion-row>
                <ion-col *ngFor="let pic of picsum" size="6" sizeMd="4">
                  <fiv-gallery-image [src]="pic"></fiv-gallery-image>
                </ion-col>
              </ion-row>
            </ion-grid>
          </fiv-gallery>
```
