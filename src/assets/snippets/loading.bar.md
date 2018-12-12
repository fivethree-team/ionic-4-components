Example Implementation

```html

            <fiv-loading-progress-bar #bar></fiv-loading-progress-bar>

            ...

            <ion-button [disabled]="bar.loading" (click)="bar.incrementBy(10)">
              increment
            </ion-button>
    
            <ion-button [disabled]="bar.loading" (click)="bar.decrementBy(-10)">
              decrement
            </ion-button>
    
            <ion-button [disabled]="bar.loading" (click)="bar.fillIn(700)">
              fill
            </ion-button>
    
            <ion-button [disabled]="bar.loading" (click)="bar.shrinkIn(2000)">
              shrink
            </ion-button>
            <ion-button [disabled]="bar.loading" (click)="bar.load()">
              load
            </ion-button>
            <ion-button [disabled]="!bar.loading" (click)="bar.unload()">
              unload
            </ion-button>
            <ion-button [disabled]="!bar.loading" (click)="bar.complete()">
              complete
            </ion-button>

```


