Example Implementation of Loading Button

```html
<fiv-loading-button [disabled]="button.loading" #button>send</fiv-loading-button>
...
<ion-button [disabled]="button.loading" (click)="button.load()">
  load
</ion-button>
<ion-button [disabled]="!button.loading" (click)="button.unload()">
  unload
</ion-button>
<ion-button [disabled]="!button.loading" (click)="button.complete()">
  complete
</ion-button>            
```
<br>

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