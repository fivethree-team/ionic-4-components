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