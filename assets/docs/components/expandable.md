```html
<fiv-expandable #ex>
  <ion-item header (click)="ex.toggle()">
    <ion-label>Expandable Header</ion-label>
    <fiv-expandable-indicator slot="end"> </fiv-expandable-indicator>
  </ion-item>
  <div content>
    put content here...
  </div>
</fiv-expandable>
```
