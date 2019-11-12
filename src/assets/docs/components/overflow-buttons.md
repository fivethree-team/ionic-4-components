## Basic Example

```html
<ion-toolbar>
  <fiv-buttons [count]="1" slot="end">
    <fiv-button
      (click)="presentToast('add clicked')"
      [icon]="'md-add'"
      [text]="'Add'"
    >
    </fiv-button>
    <fiv-button
      (click)="presentToast('delete clicked')"
      [icon]="'md-trash'"
      [text]="'Delete'"
    >
    </fiv-button>
    <fiv-button
      (click)="presentToast('select image clicked')"
      [icon]="'md-image'"
      [text]="'Select Image'"
    >
    </fiv-button>
    <fiv-button
      (click)="presentToast('take photo clicked')"
      [icon]="'md-camera'"
      [text]="'Take Photo'"
    >
    </fiv-button>
  </fiv-buttons>
</ion-toolbar>
```

## Full Example

```html
<ion-toolbar>
  <fiv-buttons
    [iconsOnly]="true"
    [forceActionsheet]="false"
    [forcePopover]="false"
    [header]="'Header Text'"
    [subHeader]="'Subheader Text'"
    [count]="1"
    slot="end"
  >
    <fiv-button
      (click)="presentToast('add clicked')"
      [icon]="'md-add'"
      [text]="'Add'"
    >
    </fiv-button>
    <fiv-button
      (click)="presentToast('delete clicked')"
      [icon]="'md-trash'"
      [text]="'Delete'"
    >
    </fiv-button>
    <fiv-button
      (click)="presentToast('select image clicked')"
      [icon]="'md-image'"
      [text]="'Select Image'"
    >
    </fiv-button>
    <fiv-button
      (click)="presentToast('take photo clicked')"
      [icon]="'md-camera'"
      [text]="'Take Photo'"
    >
    </fiv-button>
  </fiv-buttons>
</ion-toolbar>
```
