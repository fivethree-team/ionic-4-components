```html
...
<ion-button (click)="dialog.open()">
  Show Dialog
</ion-button>
...
<fiv-dialog
  (fivClose)="close()"
  [pullEnabled]="pull"
  (fivDurationOver)="dialog.close()"
  [inDuration]="inDuration"
  [outDuration]="outDuration"
  #dialog
  [duration]="duration"
  [shape]="shape"
  [horizontalAlign]="horizontalAlign"
  [verticalAlign]="verticalAlign"
  [backdrop]="backdrop"
>
  <ion-card-header>
    <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>
    <ion-card-title>Awesome Title</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    <p>The content for this dialog</p>
  </ion-card-content>
  <ion-toolbar>
    <ion-buttons slot="end">
      <ion-button (click)="dialog.close()">
        Cancel
      </ion-button>
      <ion-button color="primary">
        Do Action
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</fiv-dialog>
```
