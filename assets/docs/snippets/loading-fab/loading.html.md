
Example implementation Floating Action Button
```html
<fiv-loading-fab [disabled]="fab.loading" [icon]="'md-add'" #fab></fiv-loading-fab>
...
<ion-button [disabled]="fab.loading || fab.icon === 'md-checkmark'" (click)="fab.load()">
  load
</ion-button>
<ion-button [disabled]="!fab.loading" (click)="fab.unload()">
  unload
</ion-button>
<ion-button [disabled]="!fab.loading" (click)="fab.complete()">
  complete
</ion-button>
<ion-button [disabled]="fab.icon !== 'md-checkmark'" (click)="fab.icon = 'md-add'">
  reset
</ion-button>         
```