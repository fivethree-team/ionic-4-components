```html
<ion-item lines="none">
  <ion-label>Show Password</ion-label>
  <ion-checkbox slot="start" [(ngModel)]="show"></ion-checkbox>
</ion-item>
<fiv-password placeholder="Password" [show]="show"></fiv-password>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordExample {
  show = true;
}
```